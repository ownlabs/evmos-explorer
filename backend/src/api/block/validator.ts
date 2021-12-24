import Joi from "joi";
import "joi-extract-type";

export const validate = {
  query: Joi.object({
    populated: Joi.boolean(),
    limit: Joi.number(),
    skip: Joi.number(),
  }),

  getByNumber: {
    params: Joi.object({
      number: Joi.number().positive().required(),
    }),
    query: Joi.object({
      populated: Joi.boolean(),
    }),
  },
};
