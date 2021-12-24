import { Router } from "express";
import asyncHandler from "express-async-handler";

import { validator } from "../../util";
import { transactionController } from "./controller";
import { validate } from "./validator";

export const router = Router();

// EVM endpoints
router.get("/evm/count", asyncHandler(transactionController.evm.count));
router.get(
  "/evm/:hash",
  validator.params(validate.getByHash.params),
  validator.query(validate.getByHash.query),
  asyncHandler(transactionController.evm.getByHash)
);
router.get("/evm", validator.query(validate.query), asyncHandler(transactionController.evm.query));

// Cosmos endpoints
router.get("/cosmos/count", asyncHandler(transactionController.cosmos.count));
router.get(
  "/cosmos/:id",
  validator.params(validate.getById.params),
  validator.query(validate.getById.query),
  asyncHandler(transactionController.cosmos.getById)
);
router.get("/cosmos", validator.query(validate.query), asyncHandler(transactionController.cosmos.query));
