import { CosmosTransactionPlain, CosmosTransactionPopulated } from "@evmos-blockexplorer/types";
import { Document } from "mongoose";

import { ws } from "../../services/websocket";
import mongo from "../../services/mongo";
import { CosmosTransactionFilterQuery, QueryOptions } from "../../util";

export const cosmosTransactionHandler = {
  populate: async (plainTransaction: CosmosTransactionPlain & Document): Promise<CosmosTransactionPopulated> => {
    const populated = await plainTransaction.populate("block");
    const lean = populated.toObject();
    const res = { ...lean, kind: "evm-transaction-populated" } as unknown as CosmosTransactionPopulated;
    return res;
  },

  count: async (): Promise<number> => {
    const transactions = await mongo.CosmosTransaction.count();
    return transactions;
  },

  getOne: async (
    filter: Partial<CosmosTransactionPlain>,
    populated?: boolean
  ): Promise<CosmosTransactionPlain | CosmosTransactionPopulated> => {
    const tx = await mongo.CosmosTransaction.findOne(filter);
    if (!tx) throw new Error("CosmosTransaction  not found.");
    if (populated) return cosmosTransactionHandler.populate(tx);
    return tx.toObject();
  },

  query: async (
    filter: CosmosTransactionFilterQuery,
    options?: QueryOptions
  ): Promise<CosmosTransactionPlain[] | CosmosTransactionPopulated[]> => {
    const transactions = await mongo.CosmosTransaction.find(filter, undefined, {
      sort: { timestamp: -1 },
      limit: options?.limit,
      skip: options?.skip,
    });
    if (!options?.populated) return transactions.map((tx) => tx.toObject());

    const populatedTransactions = await Promise.all(transactions.map((tx) => cosmosTransactionHandler.populate(tx)));
    return populatedTransactions;
  },

  create: async (transaction: CosmosTransactionPlain): Promise<CosmosTransactionPlain> => {
    const newTx = await new mongo.CosmosTransaction(transaction).save();
    ws.io?.emit("cosmos-transaction-creation", transaction._id);
    return newTx.toObject();
  },
};
