import { DB_URI, NODE_ENV, PORT } from "./constants";
import mongo from "./services/mongo";
import { logger } from "./util";
import { initBlockListener } from "./services/eth-listener/blocks";
import { appServer } from "./services/server";
import { ws } from "./services/websocket";
import { expressApp } from "./services/app";

const shutdown = async () => {
  logger.info(`Stopping server [${NODE_ENV}] . . .`);
  appServer.server?.close(async (error) => {
    if (error) return logger.warn("Failed closing HTTP service:", error);

    logger.info("Closed HTTP service");

    try {
      await mongo.close();
    } catch (error) {
      logger.warn("Failed closing MongoDB connection:", error);
      logger.info("👋 Stopped server");
      process.exit(0);
    }
    logger.info("Closed MongoDB connection");
    logger.info("👋 Stopped server");
    process.exit(0);
  });
};

const startup = async (): Promise<void> => {
  process.on("SIGTERM", shutdown);
  process.on("SIGINT", shutdown);

  logger.info(`😊 Starting server [${NODE_ENV}] . . .`);

  await mongo.connect();
  logger.info(`MongoDB connection open on ${DB_URI}`);

  expressApp.init();
  appServer.init(expressApp.app!);
  ws.init(appServer.server!);

  appServer.server!.listen(PORT, async () => {
    logger.info(`HTTP service listening on port ${PORT}`);
  });
  initBlockListener();
};

startup();
