import { TransactionResponse } from "@ethersproject/abstract-provider";
import { BlockCreation, TransactionCreation } from "@evmos-blockexplorer/types";
import { fetchMissingBlocks } from "./missing-blocks";
import { blockCore } from "../../core";
import { logger } from "../../util";
import { evmosRPC } from "./config";
import { initMetrics } from "./metrics";
import { getCosmosBlockData } from "../cosmos/rpc";

export const getBlockNumber = async () => await evmosRPC.getBlockNumber();

export const getBlock = async (number: number): Promise<BlockCreation> => {
  const { ...block } = await evmosRPC.getBlockWithTransactions(number);

  const filledTransactions: TransactionCreation[] = (
    await Promise.all(block.transactions.map(async (tx: TransactionResponse) => fillTransaction(tx, block.timestamp)))
  ).filter((tx): tx is TransactionCreation => !!tx);

  const { decodedTxs, cosmosData } = await getCosmosBlockData(number);
  return {
    ...block,
    consensusInfo: cosmosData,
    gasLimit: block.gasLimit ? block.gasLimit.toNumber() : 0,
    gasUsed: block.gasUsed ? block.gasUsed.toNumber() : 0,
    evmTransactions: filledTransactions,
    cosmosTransactions: decodedTxs,
    kind: "block-creation",
  };
};

const fillTransaction = async (
  tx: TransactionResponse & { input?: number },
  blockTime: number
): Promise<TransactionCreation | undefined> => {
  const { nonce, data, value, r, s, v, gasPrice, input, timestamp } = tx;
  try {
    const { blockNumber, blockHash, transactionIndex, transactionHash: hash, gasUsed: gas, from, to } = await tx.wait();
    return {
      blockNumber,
      blockHash,
      timestamp: timestamp ?? blockTime,
      hash,
      transactionIndex,
      input,
      gasPrice: gasPrice ? gasPrice.toNumber() : 0,
      gas: gas.toNumber(),
      from,
      to: to ?? "N/A",
      nonce,
      data,
      r: r ?? "N/A",
      s: s ?? "N/A",
      v: v ?? 0,
      value: value.toNumber(),
      kind: "evm-transaction-creation",
    };
  } catch (err) {
    logger.debug(`Failed tx: ${tx.hash} with error ${err}`);
    return undefined;
  }
};

export const handleNewBlock = async (
  number: number,
  options?: { hideLog?: boolean; skipWebSocket?: boolean; skipCosmosTx?: boolean; forceMetrics?: boolean }
) => {
  const evmBlock = await getBlock(number);
  !options?.hideLog && logger.info(`Adding block ${number}`);
  await blockCore.create(evmBlock, options);
};

export const initBlockListener = async () => {
  await initMetrics();
  evmosRPC.on("block", handleNewBlock);
  await fetchMissingBlocks();
};
