interface TransactionBase {
  _id: string;
  hash: string;
  blockHash: string;
  blockNumber: number;
  timestamp: number;
  from: string;
  to: string;
  gas?: number;
  gasPrice: number;
  input?: number;
  nonce: number;
  transactionIndex?: number;
  value: number;
  data: string;
  v: number;
  r: string;
  s: string;
}

export interface TransactionPlain extends TransactionBase {
  kind: "evm-transaction-plain";
  block: string;
}

export interface TransactionPopulated extends TransactionBase {
  kind: "evm-transaction-populated";
  block: import("./block").BlockPlain;
}

export interface TransactionCreation extends Omit<TransactionBase, "_id"> {
  kind: "evm-transaction-creation";
}
