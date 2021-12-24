export interface SearchResponse {
  blocks: import("./block").BlockPopulated[] | import("./block").BlockPlain[];
  evmTransactions: import("./transaction").TransactionPopulated[] | import("./transaction").TransactionPlain[];
  cosmosTransactions: import("./cosmos-transaction").CosmosTransactionPopulated[] | import("./cosmos-transaction").CosmosTransactionPlain[];
}

export interface SearchResponseNarrowed<P extends boolean> {
  blocks: P extends true ? import("./block").BlockPopulated[] : import("./block").BlockPlain[];
  evmTransactions: P extends true ? import("./transaction").TransactionPopulated[] : import("./transaction").TransactionPlain[];
  cosmosTransactions: P extends true ? import("./cosmos-transaction").CosmosTransactionPopulated[] : import("./cosmos-transaction").CosmosTransactionPlain[];
}
