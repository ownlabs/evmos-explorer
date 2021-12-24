import { ErrorRequestHandler, Request, Response } from "express";

import { logger } from "../../util";

export const handleError: ErrorRequestHandler = (err, _req: Request, res: Response, _next) => {
  logger.error(err);
  res.sendStatus(500);
};
