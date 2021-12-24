import { useQuery, UseQueryResult } from "react-query";
import { BlockPopulated } from "@evmos-blockexplorer/types";
import { useRouteMatch } from "react-router-dom";

import { api } from "./config";
import { BLOCKS_LIMIT } from "../utils";

export const useBlocksCount = (): UseQueryResult<number> =>
  useQuery<number>(["block", "count"], async () => {
    const res = await api.get("/block/count");
    return res.data.data;
  });

export const useBlocksPagesCount = (): number => {
  const { data } = useBlocksCount();
  if (!data) return 0;
  return Math.ceil(data / BLOCKS_LIMIT);
};

export const useBlocksPage = (page: number): UseQueryResult<BlockPopulated[]> =>
  useQuery<BlockPopulated[]>(
    ["block", { page }],
    async () => {
      const skip = (page - 1) * BLOCKS_LIMIT;
      const res = await api.get(`/block?populated=true&limit=${BLOCKS_LIMIT}&skip=${skip}`);
      return res.data.data;
    },
    { keepPreviousData: true }
  );

export const useBlock = (num: number): UseQueryResult<BlockPopulated> =>
  useQuery<BlockPopulated>(["block", num], async () => {
    const res = await api.get(`/block/${num}?populated=true`);
    return res.data.data;
  });

interface DetailRouteParams {
  number: string;
}

export const useBlockByRouteParam = (): UseQueryResult<BlockPopulated> => {
  const { number } = useRouteMatch<DetailRouteParams>().params;
  const qres = useBlock(Number(number));
  return qres;
};
