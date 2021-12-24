import { RequestHandler } from "express";

import { cosmosTransactionCore, transactionCore } from "../../core";

interface TransactionController {
  evm: {
    count: RequestHandler;
    query: RequestHandler;
    getByHash: RequestHandler;
  };

  cosmos: {
    count: RequestHandler;
    query: RequestHandler;
    getById: RequestHandler;
  };
}

export const transactionController: TransactionController = {
  evm: {
    getByHash: async (req, res) => {
      const { hash } = req.params;
      const populated = Boolean(req.query.populated);
      const transaction = await transactionCore.getOne({ hash }, populated);
      res.json({ data: transaction });
    },

    query: async (req, res) => {
      const transactions = await transactionCore.query({}, req.query);
      res.json({ data: transactions });
    },

    count: async (_req, res) => {
      const transactions = await transactionCore.count();
      res.json({ data: transactions });
    },
  },

  cosmos: {
    getById: async (req, res) => {
      const { id } = req.params;
      const populated = Boolean(req.query.populated);
      const transaction = await cosmosTransactionCore.getOne({ _id: id }, populated);
      res.json({ data: transaction });
    },

    query: async (req, res) => {
      const transactions = await cosmosTransactionCore.query({}, req.query);
      res.json({ data: transactions });
    },

    count: async (_req, res) => {
      const transactions = await cosmosTransactionCore.count();
      res.json({ data: transactions });
    },
  },
};
