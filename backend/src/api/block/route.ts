import { Router } from "express";
import asyncHandler from "express-async-handler";

import { blockController } from "./controller";
import { validator } from "../../util/validator";
import { validate } from "./validator";

export const router = Router();

// GET
router.get("/count", asyncHandler(blockController.count));
router.get(
  "/:number",
  validator.params(validate.getByNumber.params),
  validator.query(validate.getByNumber.query),
  asyncHandler(blockController.getByNumber)
);
router.get("", validator.query(validate.query), asyncHandler(blockController.query));
