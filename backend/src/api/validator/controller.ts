import { RequestHandler } from "express";

import { validatorCore } from "../../core/validator";

interface ValidatorController {
  getByBlockNumber: RequestHandler;
  getLatest: RequestHandler;
}

export const validatorController: ValidatorController = {
  getByBlockNumber: async (req, res) => {
    const blockNumber = Number(req.params.blockNumber);
    const validatorList = await validatorCore.findListByBlockNumber(blockNumber);
    res.json({ data: validatorList }).status(200);
  },

  getLatest: async (req, res) => {
    const validatorList = await validatorCore.findLatestList();
    res.json({ data: validatorList }).status(200);
  },
};
