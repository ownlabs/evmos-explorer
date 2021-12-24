import axios from "axios";
import { QueryClient } from "react-query";
import { io } from "socket.io-client";

import { BASE_URL, BASE_URL_WS } from "../utils";

export const api = axios.create({ responseType: "json", baseURL: BASE_URL });

if (process.env.NODE_ENV === "development") {
  api.interceptors.request.use((request) => {
    console.log("Starting Request", request);
    return request;
  });
}

api.interceptors.response.use(
  (response) => {
    if (process.env.NODE_ENV === "development") {
      console.log("Response:", response);
    }
    return response;
  },
  (err) => {
    if (process.env.NODE_ENV === "development") {
      console.warn("Response Error:", err);
    }
    return Promise.reject(err.response.data);
  }
);

export const queryClient = new QueryClient();

export const socket = io(BASE_URL_WS);
