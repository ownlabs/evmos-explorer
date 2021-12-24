import { TransactionPlain, TransactionPopulated } from "@evmos-blockexplorer/types";

import { transactionHandler } from "../db/handlers";
import { QueryOptions, TransactionFilterQuery } from "../util";

export const transactionCore = {
  count: (): Promise<number> => {
    return transactionHandler.count();
  },

  getOne: async (filter: Partial<TransactionPlain>, populated?: boolean): Promise<TransactionPlain | TransactionPopulated> => {
    return transactionHandler.getOne(filter, populated);
  },

  query: async (filter: TransactionFilterQuery, options?: QueryOptions): Promise<TransactionPlain[] | TransactionPopulated[]> => {
    return transactionHandler.query(filter, options);
  },
};
