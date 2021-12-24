import { CosmosTransactionCreation, CosmosTxMessage, Validator, ConsensusInfo, ConsensusSignature } from "@evmos-blockexplorer/types";
import { cosmosPostRequest } from "./util";
import { underscoreValidatorToCamelCase, RawValidator, underscoreConsensusToCamelCase } from "../util";
import { DecodedTxRaw, decodeTxRaw, Registry } from "@cosmjs/proto-signing";
import { defaultRegistryTypes } from "@cosmjs/stargate";
import { COSMOS_RPC } from "../../../constants";
import { fromBase64, logger } from "../../../util";

const PER_PAGE = 100;

interface BlockReturn {
  decodedTxs: CosmosTransactionCreation[];
  cosmosData: ConsensusInfo;
}

const calculatePagesCount = (pageSize: number, totalCount: number) => {
  return totalCount < pageSize ? 1 : Math.ceil(totalCount / pageSize);
};

const getValidatorsByPage = (blockNumber: number, page: number) =>
  cosmosPostRequest({ url: `${COSMOS_RPC}/validators?height=${blockNumber}&page=${page}&per_page=${PER_PAGE}`, hideLog: true });

export const getValidatorsByNumber = async (blockNumber: number): Promise<Validator[]> => {
  const {
    data: { result: validatorResponse },
  } = await getValidatorsByPage(blockNumber, 1);

  const allValidators: RawValidator[] = [...validatorResponse.validators];
  for (let i = 2; i < calculatePagesCount(PER_PAGE, validatorResponse.total) + 1; i++) {
    const {
      data: { result: validatorResponse },
    } = await getValidatorsByPage(blockNumber, i);
    allValidators.push(...validatorResponse.validators);
  }

  return allValidators.map((val) => underscoreValidatorToCamelCase(val));
};

export const getCosmosBlockData = async (height: number): Promise<BlockReturn> => {
  const { data } = await cosmosPostRequest({ url: `${COSMOS_RPC}/block?height=${height}`, hideLog: false });
  const cosmosTxs = data.result.block.data.txs;

  const blockHeader = data.result.block.header;
  const blockTime = blockHeader.time;
  const lastCommitHash = blockHeader.last_commit_hash;
  const dataHash = blockHeader.data_hash;
  const validatorsHash = blockHeader.validators_hash;
  const nextValidatorsHash = blockHeader.next_validators_hash;
  const consensusHash = blockHeader.consensus_hash;
  const appHash = blockHeader.app_hash;
  const lastResultsHash = blockHeader.last_results_hash;
  const evidenceHash = blockHeader.evidence_hash;
  const proposerAddress = blockHeader.proposer_address;

  const cosmosData: ConsensusInfo = {
    lastCommitHash,
    dataHash,
    validatorsHash,
    nextValidatorsHash,
    consensusHash,
    appHash,
    lastResultsHash,
    evidenceHash,
    proposerAddress,
  };

  const decodedTxs = decodeCosmosTxData(cosmosTxs, blockTime, height);

  return {
    decodedTxs,
    cosmosData,
  };
};

export const decodeCosmosTxData = (transactions: any, time: any, height: number): CosmosTransactionCreation[] => {
  let transactionBaseList: CosmosTransactionCreation[] = [];
  if (transactions.length > 0) {
    const decodedTransactions: DecodedTx[] = transactions.map((tx: any) => decodeTx(tx));
    transactionBaseList = decodedTransactions.map((tx: DecodedTx) =>
      rawTxToBase(tx, {
        height,
        time,
      })
    );
  }
  return transactionBaseList;
};

const rawTxToBase = (transaction: DecodedTx, block: { height: number; time: string }): CosmosTransactionCreation => {
  const tx = transaction.tx;
  const msgs = transaction.msgs;

  return {
    height: block.height,
    timestamp: new Date(block.time).getTime(),
    tx: {
      msg: msgs,
      fee: {
        gasLimit: tx.authInfo.fee?.gasLimit,
        amount: tx.authInfo.fee?.amount.map((amount) => {
          return {
            denom: amount.denom,
            amount: parseInt(amount.amount),
          };
        }),
      },
      memo: tx.body.memo,
      signatures: tx.signatures,
      signerInfos: tx.authInfo.signerInfos.map((signerInfo) => ({ sequence: signerInfo.sequence, publicKey: signerInfo.publicKey })),
    },
    kind: "cosmos-transaction-creation",
  };
};
interface DecodedTx {
  tx: DecodedTxRaw;
  msgs: CosmosTxMessage[];
}

const decodeTx = (tx: string): DecodedTx => {
  const registry = new Registry(defaultRegistryTypes);

  const decoded = decodeTxRaw(fromBase64(tx));
  const parsedData = [];
  for (const message of decoded.body.messages) {
    let decodedMsg: any;
    try {
      decodedMsg = registry.decode(message);
    } catch (e) {
      logger.error("Message decoding error:", e);
      decodedMsg = message.value;
    }

    const parsedMsg = parseMsg(message.typeUrl, decodedMsg);
    parsedData.push(parsedMsg);
  }

  return { tx: decoded, msgs: parsedData };
};

const parseMsg = (typeUrl: any, value: { [key: string]: string }): CosmosTxMessage => {
  return {
    type: typeUrl.split("/cosmos.distribution.v1beta1.")[1],
    value: value,
  };
};
