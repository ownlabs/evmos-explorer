import { Metrics } from "@evmos-blockexplorer/types";

import { metricsHandler } from "../db/handlers";
import { QueryOptions } from "../util";

export const metricsCore = {
  count: (): Promise<number> => {
    return metricsHandler.count();
  },

  getOne: async (filter: Partial<Metrics>): Promise<Metrics> => {
    return metricsHandler.getOne(filter);
  },

  getLatest: async (): Promise<Metrics | undefined> => {
    return metricsHandler.getLatest();
  },

  query: async (filter: Partial<Metrics>, options?: QueryOptions): Promise<Metrics[]> => {
    return metricsHandler.query(filter, options);
  },

  create: async (newMetrics: Metrics): Promise<void> => {
    await metricsHandler.create(newMetrics);
  },
};
