import { SearchResponse } from "@evmos-blockexplorer/types";

import { blockHandler, cosmosTransactionHandler, transactionHandler } from "../db/handlers";
import { QueryOptions } from "../util";

export const searchCore = {
  search: async (pattern: string, options?: QueryOptions): Promise<SearchResponse> => {
    const blocks = await blockHandler.query({ $or: [{ hash: pattern }, { number: Number(pattern) }] }, options);
    const evmTransactions = await transactionHandler.query({ hash: pattern }, options);
    const cosmosTransactions = await cosmosTransactionHandler.query({ height: Number(pattern) }, options);

    return { blocks, evmTransactions, cosmosTransactions };
  },
};
