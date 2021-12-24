import path from "path";
import express, { Express } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

import { PORT, CORS_ORIGIN } from "../constants";
import { router } from "../api";
import { logger } from "../util/logger";

class ExpressApp {
  app?: Express;

  init() {
    this.app = express();

    this.app!.set("port", PORT);

    this.app!.use(helmet());

    this.app!.use(
      express.json({
        limit: "100mb",
      })
    );
    this.app!.use(
      express.urlencoded({
        extended: true,
        limit: "100mb",
      })
    );
    this.app!.use(cookieParser());
    this.app!.use(express.static(path.join(process.cwd(), "public")));

    morgan.token(
      "response-time-short",
      function getResponseTimeRounded(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this: any,
        req,
        res
      ) {
        const responseTime = this["response-time"](req, res);
        return `${Math.round(responseTime)}ms`;
      }
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    morgan.token("body", (req) => `${JSON.stringify((req as any)?.body)}`);
    const httpLogger = morgan(":method :url :status :remote-addr :response-time-short :body", {
      stream: {
        write: (message: string): void => {
          logger.http(message.trim());
        },
      },
    });
    this.app!.use(httpLogger);

    this.app!.enable("trust proxy");

    this.app!.set("trust proxy", 1);
    this.app!.use(
      cors({
        origin: function (origin, callback) {
          // allow requests with no origin
          // (like mobile apps or curl requests)
          if (!origin) return callback(null, true);
          // incorrect typing, see: https://expressjs.com/en/resources/middleware/cors.html#configuring-cors-w-dynamic-origin
          return callback(null, !!CORS_ORIGIN);
        },
        credentials: true,
      })
    );

    this.app!.use(router);
  }
}

export const expressApp = new ExpressApp();
