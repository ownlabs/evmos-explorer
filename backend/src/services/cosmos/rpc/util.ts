import axios, { AxiosResponse, AxiosError } from "axios";
import { logger } from "../../../util";
import { COSMOS_RPC } from "../../../constants";

export const cosmosPostRequest = async (options: {
  url?: string;
  params?: (number | string)[];
  hideLog?: boolean;
}): Promise<AxiosResponse> => {
  const { url, params, hideLog } = options;

  const _url = url || COSMOS_RPC;

  !hideLog && logger.debug(`Making POST to ${_url} with params [${params?.join(",") || ""}]`);
  return axios
    .get(_url, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      params: params || [],
    })
    .then((response) => response)
    .catch((e: AxiosError) => {
      logger.error(`POST ${_url} failed with params [${params?.join(",") || ""}]`);
      throw e;
    });
};
