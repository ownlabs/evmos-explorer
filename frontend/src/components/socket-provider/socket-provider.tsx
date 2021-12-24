import { FC, useEffect } from "react";
import { useQueryClient } from "react-query";

import { socket } from "../../service";

export const SocketProvider: FC = ({ children }) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    socket.on("block-creation", (blockNumber) => {
      queryClient.invalidateQueries(["block", "count"]);
      queryClient.invalidateQueries(["block", Number(blockNumber)]);
      queryClient.invalidateQueries(["block", { page: 1 }]);
    });

    socket.on("evm-transaction-creation", (txHash) => {
      queryClient.invalidateQueries(["transaction", "count"]);
      queryClient.invalidateQueries(["transaction", txHash]);
      queryClient.invalidateQueries(["transaction", { page: 1 }]);
    });

    socket.on("cosmos-transaction-creation", (txHash) => {
      queryClient.invalidateQueries(["cosmosTransaction", "count"]);
      queryClient.invalidateQueries(["cosmosTransaction", txHash]);
      queryClient.invalidateQueries(["cosmosTransaction", { page: 1 }]);
    });

    socket.on("validator-creation", (blockNumber) => {
      queryClient.invalidateQueries(["validator", Number(blockNumber)]);
    });

    socket.on("metrics-creation", () => {
      queryClient.invalidateQueries(["metrics", "count"]);
      queryClient.invalidateQueries(["metrics", "latest"]);
    });
  }, [queryClient]);

  return <>{children}</>;
};
