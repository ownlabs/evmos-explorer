import { RequestHandler } from "express";

import { blockCore } from "../../core";

interface BlockController {
  getByNumber: RequestHandler;
  query: RequestHandler;
  count: RequestHandler;
}

export const blockController: BlockController = {
  getByNumber: async (req, res) => {
    const number = Number(req.params.number);
    const populated = Boolean(req.query.populated);
    const block = await blockCore.getOne({ number }, populated);
    res.json({ data: block });
  },

  query: async (req, res) => {
    const query = req.query;
    const result = await blockCore.query({}, query);
    res.json({ data: result });
  },

  count: async (_req, res) => {
    const result = await blockCore.count();
    res.json({ data: result });
  },
};
