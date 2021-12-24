import { TransactionPopulated } from "@evmos-blockexplorer/types";
import { useQuery, UseQueryResult } from "react-query";
import { useRouteMatch } from "react-router-dom";

import { TRANSACTIONS_LIMIT } from "../utils";
import { api } from "./config";

export const useTransactionsCount = (): UseQueryResult<number> =>
  useQuery<number>(["transaction", "count"], async () => {
    const res = await api.get("/transaction/evm/count");
    return res.data.data;
  });

export const useTransactionsPagesCount = (): number => {
  const { data } = useTransactionsCount();
  if (!data) return 0;
  return Math.ceil(data / TRANSACTIONS_LIMIT);
};

export const useTransactionsPage = (page: number): UseQueryResult<TransactionPopulated[]> =>
  useQuery<TransactionPopulated[]>(
    ["transaction", { page }],
    async () => {
      const skip = (page - 1) * TRANSACTIONS_LIMIT;
      const res = await api.get(`/transaction/evm?populated=true&limit=${TRANSACTIONS_LIMIT}&skip=${skip}`);
      return res.data.data;
    },
    { keepPreviousData: true }
  );

export const useTransaction = (hash: string): UseQueryResult<TransactionPopulated> =>
  useQuery<TransactionPopulated>(["transaction", hash], async () => {
    const res = await api.get(`/transaction/evm/${hash}?populated=true`);
    return res.data.data;
  });

interface DetailRouteParams {
  hash: string;
}

export const useTransactionByRouteParam = (): UseQueryResult<TransactionPopulated> => {
  const { hash } = useRouteMatch<DetailRouteParams>().params;
  const qres = useTransaction(hash);
  return qres;
};
