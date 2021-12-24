import Joi from "joi";
import "joi-extract-type";

import { BlockHash } from "../../util";

export const validate = {
  query: Joi.object({
    populated: Joi.boolean(),
    limit: Joi.number(),
    skip: Joi.number(),
  }),

  getByHash: {
    params: Joi.object({
      hash: BlockHash,
    }),
    query: Joi.object({
      populated: Joi.boolean(),
    }),
  },

  getById: {
    params: Joi.object({
      id: Joi.string(),
    }),
    query: Joi.object({
      populated: Joi.boolean(),
    }),
  },
};
