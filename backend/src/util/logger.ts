import { createLogger, format, transports } from "winston";
import { MongoDB as MongoDBTransport } from "winston-mongodb";

import { NODE_ENV, DB_URI, DB_NAME } from "../constants";

const logLevel = NODE_ENV === "production" ? "http" : "debug";

export const mongoDBTransport = new MongoDBTransport({
  db: `${DB_URI}/${DB_NAME}`,
  level: logLevel,
  collection: "logs",
  name: "mongoLog",
  options: {
    useUnifiedTopology: true,
  },
});

export const logger = createLogger({
  level: logLevel,
  format: format.combine(
    format.timestamp(),
    format.printf(({ level, message, timestamp }) => {
      return `${timestamp} ${level.slice(0, 7).padEnd(7, " ")} - ${message}`;
    })
  ),
  transports: [new transports.Console(), mongoDBTransport],
});
