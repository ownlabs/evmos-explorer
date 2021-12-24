import { BlockCreation, BlockPlain, BlockPopulated } from "@evmos-blockexplorer/types";

import { updateMetrics } from "../services/eth-listener/metrics";
import { blockHandler, cosmosTransactionHandler, transactionHandler } from "../db/handlers";
import { UPDATE_METRICS_BLOCK_INTERVAL, UPDATE_VALIDATOR_BLOCK_INTERVAL } from "../constants";
import { BlockFilterQuery, generateObjectId, QueryOptions } from "../util";
import { validatorCore } from "./validator";

export const blockCore = {
  count: (): Promise<number> => {
    return blockHandler.count();
  },

  getOne: async (filter: Partial<BlockPlain>, populated?: boolean): Promise<BlockPlain | BlockPopulated> => {
    return blockHandler.getOne(filter, populated);
  },

  query: async (filter: BlockFilterQuery, options?: QueryOptions): Promise<BlockPopulated[] | BlockPlain[]> => {
    return blockHandler.query(filter, options);
  },

  create: async (block: BlockCreation, options?: { skipWebSocket?: boolean, forceMetrics?: boolean }): Promise<BlockPopulated> => {
    const blockId = generateObjectId();

    const populatedBlock: BlockPopulated = {
      ...block,
      _id: blockId,
      evmTransactions: block.evmTransactions.map((tx) => ({
        ...tx,
        _id: generateObjectId(),
        block: blockId,
        kind: "evm-transaction-plain",
      })),
      cosmosTransactions: block.cosmosTransactions.map((tx) => ({
        ...tx,
        _id: generateObjectId(),
        block: blockId,
        kind: "cosmos-transaction-plain",
      })),
      kind: "block-populated",
    };

    const plainBlock: BlockPlain = {
      ...populatedBlock,
      kind: "block-plain",
      evmTransactions: populatedBlock.evmTransactions.map((tx) => tx._id),
      cosmosTransactions: populatedBlock.cosmosTransactions.map((tx) => tx._id),
    };

    await blockHandler.create(plainBlock, options);
    await Promise.all(populatedBlock.evmTransactions.map((tx) => transactionHandler.create(tx)));
    await Promise.all(populatedBlock.cosmosTransactions.map((tx) => cosmosTransactionHandler.create(tx)));

    if (block.number % UPDATE_METRICS_BLOCK_INTERVAL === 0 || options?.forceMetrics) {
      let validatorList;
      if (block.number % UPDATE_VALIDATOR_BLOCK_INTERVAL === 0 || options?.forceMetrics) {
        validatorList = await validatorCore.addListByBlockNumber(block.number, blockId);
      } else {
        validatorList = await validatorCore.findLatestList();
      }

      await updateMetrics(block, validatorList);
    }

    return populatedBlock;
  },
};
