import http from "http";
import { Server } from "socket.io";

import { CORS_ORIGIN } from "../constants";
import { logger } from "../util";

class WebSocket {
  io?: Server;

  init(server: http.Server) {
    this.io = new Server(server, { cors: { origin: CORS_ORIGIN[0] } });

    this.io.on("connection", (socket) => {
      logger.info("Client connected to socket.");

      socket.on("disconnect", () => {
        logger.info("Client disconnected from socket.");
      });
    });
  }
}

export const ws = new WebSocket();
