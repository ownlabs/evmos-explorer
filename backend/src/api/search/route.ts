import { Router } from "express";
import asyncHandler from "express-async-handler";

import { searchController } from "./controller";
import { validator } from "../../util/validator";
import { validate } from "./validator";

export const router = Router();

// GET
router.get(
  "/:pattern",
  validator.params(validate.search.params),
  validator.query(validate.search.query),
  asyncHandler(searchController.search)
);
