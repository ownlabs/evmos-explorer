interface CosmosTxMessage {
  type: string,
  value: {
    [key: string]: string,
  }
}

interface SignerInfo {
  sequence: Long,
  publicKey: any,
}
interface CosmosTransactionBase {
  _id: string;
  height: number;
  timestamp: number;
  tx: {
    msg: CosmosTxMessage[];
    fee: {
      gasLimit?: Long;
      amount?: {
        denom: string;
        amount: number;
      }[];
    };
    memo: string;
    signatures: readonly Uint8Array[];
    signerInfos: SignerInfo[]; 
  };
}

export interface CosmosTransactionPlain extends CosmosTransactionBase {
  kind: "cosmos-transaction-plain";
  block: string;
}
export interface CosmosTransactionPopulated extends CosmosTransactionBase {
  kind: "cosmos-transaction-populated";
  block: import("./block").BlockPlain;
}

export interface CosmosTransactionCreation extends Omit<CosmosTransactionBase, "_id"> {
  kind: "cosmos-transaction-creation";
}
