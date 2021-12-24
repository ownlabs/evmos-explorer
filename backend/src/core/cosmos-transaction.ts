import { CosmosTransactionPlain, CosmosTransactionPopulated } from "@evmos-blockexplorer/types";

import { cosmosTransactionHandler } from "../db/handlers";
import { CosmosTransactionFilterQuery, QueryOptions } from "../util";

export const cosmosTransactionCore = {
  count: (): Promise<number> => {
    return cosmosTransactionHandler.count();
  },

  getOne: (filter: Partial<CosmosTransactionPlain>, populated?: boolean): Promise<CosmosTransactionPlain | CosmosTransactionPopulated> => {
    return cosmosTransactionHandler.getOne(filter, populated);
  },

  query: (
    filter: CosmosTransactionFilterQuery,
    options?: QueryOptions
  ): Promise<CosmosTransactionPlain[] | CosmosTransactionPopulated[]> => {
    return cosmosTransactionHandler.query(filter, options);
  },
};
