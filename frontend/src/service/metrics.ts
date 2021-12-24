import { useQuery, UseQueryResult } from "react-query";
import { Metrics } from "@evmos-blockexplorer/types";

import { api } from "./config";

export const useMetricsCount = (): UseQueryResult<number> =>
  useQuery<number>(["metrics", "count"], async () => {
    const res = await api.get("/metrics/count");
    return res.data.data;
  });

export const useLatestMetrics = (): UseQueryResult<Metrics> =>
  useQuery<Metrics>(["metrics", "latest"], async () => {
    const res = await api.get(`/metrics/latest`);
    return res.data.data;
  });
