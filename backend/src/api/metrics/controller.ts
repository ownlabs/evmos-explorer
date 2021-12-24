import { RequestHandler } from "express";

import { metricsCore } from "../../core";

interface MetricsController {
  getLatest: RequestHandler;
  query: RequestHandler;
  count: RequestHandler;
}

export const metricsController: MetricsController = {
  getLatest: async (req, res) => {
    const metrics = await metricsCore.getLatest();
    res.json({ data: metrics });
  },

  query: async (req, res) => {
    const query = req.query;
    const metrics = await metricsCore.query(query);
    res.json({ data: metrics });
  },

  count: async (_req, res) => {
    const metrics = await metricsCore.count();
    res.json({ data: metrics });
  },
};
