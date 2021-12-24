import { Router } from "express";
import asyncHandler from "express-async-handler";

import { validatorController } from "./controller";
import { validator } from "../../util/validator";
import { validate } from "./validator";

export const router = Router();

// GET
router.get("/latest", asyncHandler(validatorController.getLatest));
router.get("/:blockNumber", validator.params(validate.getByBlockNumber), asyncHandler(validatorController.getByBlockNumber));
