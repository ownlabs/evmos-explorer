import { CosmosTransactionPopulated } from "@evmos-blockexplorer/types";
import { useQuery, UseQueryResult } from "react-query";
import { useRouteMatch } from "react-router-dom";

import { TRANSACTIONS_LIMIT } from "../utils";
import { api } from "./config";

export const useCosmosTransactionsCount = (): UseQueryResult<number> =>
  useQuery<number>(["cosmosTransaction", "count"], async () => {
    const res = await api.get("/transaction/cosmos/count");
    return res.data.data;
  });

export const useCosmosTransactionsPagesCount = (): number => {
  const { data } = useCosmosTransactionsCount();
  if (!data) return 0;
  return Math.ceil(data / TRANSACTIONS_LIMIT);
};

export const useCosmosTransactionsPage = (page: number): UseQueryResult<CosmosTransactionPopulated[]> =>
  useQuery<CosmosTransactionPopulated[]>(
    ["cosmosTransaction", { page }],
    async () => {
      const skip = (page - 1) * TRANSACTIONS_LIMIT;
      const res = await api.get(`/transaction/cosmos?populated=true&limit=${TRANSACTIONS_LIMIT}&skip=${skip}`);
      return res.data.data;
    },
    { keepPreviousData: true }
  );

export const useCosmosTransaction = (id: string): UseQueryResult<CosmosTransactionPopulated> =>
  useQuery<CosmosTransactionPopulated>(["cosmosTransaction", id], async () => {
    const res = await api.get(`/transaction/cosmos/${id}?populated=true`);
    return res.data.data;
  });

interface DetailRouteParams {
  id: string;
}

export const useCosmosTransactionByRouteParam = (): UseQueryResult<CosmosTransactionPopulated> => {
  const { id } = useRouteMatch<DetailRouteParams>().params;
  const qres = useCosmosTransaction(id);
  return qres;
};
