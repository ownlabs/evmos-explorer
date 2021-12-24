import { ValidatorListPlain } from "@evmos-blockexplorer/types";
import { useQuery, UseQueryResult } from "react-query";

import { api } from "./config";

export const useLatestValidator = (): UseQueryResult<ValidatorListPlain> =>
  useQuery<ValidatorListPlain>(
    ["validator"],
    async () => {
      const res = await api.get(`/validator/latest`);
      return res.data.data;
    },
    { keepPreviousData: true }
  );
