import Joi from "joi";
import { createValidator } from "express-joi-validation";

export const validator = createValidator();

export const BlockchainAddress = Joi.string()
  .pattern(new RegExp(`^0x[a-fA-F0-9]{40}$`))
  .messages({ "string.pattern.base": "Owner needs to be a valid ethereum address" });

export const BlockHash = Joi.string()
  .pattern(new RegExp(`^0x[a-fA-F0-9]{64}$`))
  .messages({ "string.pattern.base": "Block hash needs to be a valid ethereum block hash" });
