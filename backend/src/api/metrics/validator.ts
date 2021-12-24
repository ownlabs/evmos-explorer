import Joi from "joi";
import "joi-extract-type";

export const validate = {
  query: Joi.object({
    limit: Joi.number(),
    skip: Joi.number(),
  })
};
