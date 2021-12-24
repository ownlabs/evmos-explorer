import Joi from "joi";
import "joi-extract-type";

export const validate = {
  getByBlockNumber: Joi.object({
    blockNumber: Joi.number().positive().required(),
  }),
};
