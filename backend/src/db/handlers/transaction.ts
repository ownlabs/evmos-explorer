import { TransactionPlain, TransactionPopulated } from "@evmos-blockexplorer/types";
import { Document } from "mongoose";

import { ws } from "../../services/websocket";
import mongo from "../../services/mongo";
import { QueryOptions, TransactionFilterQuery } from "../../util";

export const transactionHandler = {
  populate: async (plainTransaction: TransactionPlain & Document): Promise<TransactionPopulated> => {
    const populated = await plainTransaction.populate("block");
    const lean = populated.toObject();
    const res = { ...lean, kind: "evm-transaction-populated" } as unknown as TransactionPopulated;
    return res;
  },

  count: async (): Promise<number> => {
    const transactions = await mongo.Transaction.count();
    return transactions;
  },

  getOne: async (filter: Partial<TransactionPlain>, populated?: boolean): Promise<TransactionPlain | TransactionPopulated> => {
    const tx = await mongo.Transaction.findOne(filter);
    if (!tx) throw new Error("Transaction not found.");
    if (populated) return transactionHandler.populate(tx);
    return tx.toObject();
  },

  query: async (filter: TransactionFilterQuery, options?: QueryOptions): Promise<TransactionPlain[] | TransactionPopulated[]> => {
    const transactions = await mongo.Transaction.find(filter, undefined, {
      sort: { timestamp: -1 },
      limit: options?.limit,
      skip: options?.skip,
    });
    if (!options?.populated) return transactions.map((tx) => tx.toObject());

    const populatedTransactions = await Promise.all(transactions.map((tx) => transactionHandler.populate(tx)));
    return populatedTransactions;
  },

  create: async (transaction: TransactionPlain): Promise<TransactionPlain> => {
    const newTx = await new mongo.Transaction(transaction).save();
    ws.io?.emit("evm-transaction-creation", transaction.hash);
    return newTx.toObject();
  },
};
