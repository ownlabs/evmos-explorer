import { Router } from "express";
import asyncHandler from "express-async-handler";

import { metricsController } from "./controller";
import { validator } from "../../util/validator";
import { validate } from "./validator";

export const router = Router();

// GET
router.get("/count", asyncHandler(metricsController.count));
router.get(
  "/latest",
  asyncHandler(metricsController.getLatest)
);
router.get("", validator.query(validate.query), asyncHandler(metricsController.query));
