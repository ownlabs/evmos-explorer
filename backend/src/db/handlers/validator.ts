import { ValidatorListPlain, ValidatorListCreation } from "@evmos-blockexplorer/types";

import { ws } from "../../services/websocket";
import mongo from "../../services/mongo";

export const validatorHandler = {
  create: async (list: ValidatorListCreation): Promise<ValidatorListPlain> => {
    const newList = await new mongo.ValidatorList({ ...list, kind: "validator-list-plain" }).save();
    ws.io?.emit("validator-creation", list.blockNumber);
    return newList.toObject();
  },

  getOne: async (query: Partial<ValidatorListPlain>): Promise<ValidatorListPlain> => {
    const lists = await mongo.ValidatorList.findOne(query).lean();
    if (!lists) throw new Error("Validator list(s) not found.");
    return lists;
  },

  getLatest: async (): Promise<ValidatorListPlain> => {
    const list = await mongo.ValidatorList.find().sort({ blockNumber: -1 }).limit(1).lean();
    if (list.length === 0) throw new Error("Validator list(s) not found.");
    return list[0];
  },
};
