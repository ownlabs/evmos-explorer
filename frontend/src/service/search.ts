import { SearchResponseNarrowed } from "@evmos-blockexplorer/types";
import { useQuery, UseQueryResult } from "react-query";
import { useRouteMatch } from "react-router-dom";

import { api } from "./config";

export const useSearch = (pattern: string): UseQueryResult<SearchResponseNarrowed<true>> =>
  useQuery<SearchResponseNarrowed<true>>(["search", pattern], async () => {
    const res = await api.get(`/search/${pattern}?populated=true`);
    return res.data.data;
  });

interface RouteParams {
  pattern: string;
}

export const useSearchByRouteParam = (): UseQueryResult<SearchResponseNarrowed<true>> => {
  const { pattern } = useRouteMatch<RouteParams>().params;
  const qres = useSearch(pattern);
  return qres;
};
