interface BlockBase {
  _id: string;
  hash: string;
  parentHash: string;
  number: number;
  difficulty: number;
  extraData?: string;
  gasLimit: number;
  gasUsed: number;
  logsBloom?: string;
  miner: string;
  nonce: string;
  input?: number;
  stateRoot?: string;
  timestamp: number;
  totalDifficulty?: number;
  transactionsRoot?: string;
  consensusInfo: ConsensusInfo;
}

export interface ConsensusInfo {
  lastCommitHash: string;
  dataHash: string;
  validatorsHash: string;
  nextValidatorsHash: string;
  consensusHash: string;
  appHash: string;
  lastResultsHash: string;
  evidenceHash: string;
  proposerAddress: string;
}

export interface ConsensusSignature {
  validatorAddress: string;
  timestamp: number;
}

export interface BlockPlain extends BlockBase {
  kind: "block-plain";
  evmTransactions: string[];
  cosmosTransactions: string[];
}

export interface BlockPopulated extends BlockBase {
  kind: "block-populated";
  evmTransactions: import("./transaction").TransactionPlain[];
  cosmosTransactions: import("./cosmos-transaction").CosmosTransactionPlain[];
}

export interface BlockCreation extends Omit<BlockBase, "_id"> {
  kind: "block-creation";
  evmTransactions: import("./transaction").TransactionCreation[];
  cosmosTransactions: import("./cosmos-transaction").CosmosTransactionCreation[];
}
