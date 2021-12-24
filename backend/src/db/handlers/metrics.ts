import { Metrics } from "@evmos-blockexplorer/types";

import mongo from "../../services/mongo";
import { ws } from "../../services/websocket";
import { QueryOptions } from "../../util";

export const metricsHandler = {
  count: async (): Promise<number> => {
    const metrics = await mongo.Metrics.count();
    return metrics;
  },

  getOne: async (filter: Partial<Metrics>): Promise<Metrics> => {
    const metrics = await mongo.Metrics.findOne(filter);
    if (!metrics) throw new Error("Metrics not found.");

    return metrics.toObject();
  },

  getLatest: async (): Promise<Metrics | undefined> => {
    const metrics = await mongo.Metrics.findOne().sort({ blockCount: -1 });
    return metrics?.toObject();
  },

  query: async (filter: Partial<Metrics>, options?: QueryOptions): Promise<Metrics[]> => {
    const metrics = await mongo.Metrics.find(filter, undefined, {
      sort: { timestamp: -1 },
      limit: options?.limit,
      skip: options?.skip,
    });
    return metrics;
  },

  create: async (newMetrics: Metrics): Promise<void> => {
    await new mongo.Metrics(newMetrics).save();
    ws.io?.emit("metrics-creation");
  },
};
