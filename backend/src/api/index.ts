import { Router } from "express";

import { router as validatorRouter } from "./validator/route";
import { router as blockRouter } from "./block/route";
import { router as transactionRouter } from "./transaction/route";
import { router as metricsRouter } from "./metrics/route";
import { router as searchRouter } from "./search/route";

import { handleError } from "./middlewares/error-handlers";

export const router = Router();

router.use("/validator", validatorRouter);
router.use("/block", blockRouter);
router.use("/transaction", transactionRouter);
router.use("/metrics", metricsRouter);
router.use("/search", searchRouter);

router.use(handleError);
