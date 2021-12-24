import Joi from "joi";
import "joi-extract-type";

export const validate = {
  search: {
    params: Joi.object({
      pattern: Joi.string(),
    }),
    query: Joi.object({
      populated: Joi.boolean(),
    }),
  },
};
