import mongoose, { Schema, Document } from "mongoose";
import type { ValidatorListPlain } from "@evmos-blockexplorer/types";

const serializerOptions: mongoose.ToObjectOptions = {
  virtuals: true,
  versionKey: false,
};

export const schema = new Schema(
  {
    blockNumber: {
      type: Number,
      required: true,
      index: true,
      unique: true,
    },
    blockRef: {
      type: Schema.Types.ObjectId,
      ref: "Block",
      required: true,
    },
    validators: {
      type: [
        {
          address: { type: String, required: true },
          pubKey: {
            type: { type: String, required: true },
            value: { type: String, required: true },
          },
          votingPower: { type: Number, required: true },
          proposerPriority: { type: Number, required: true },
        },
      ],
      required: true,
    },
    totalVotingPower: {
      type: Number,
      required: true,
    },
    meanVotingPower: {
      type: Number,
      required: true,
    },
    medianVotingPower: {
      type: Number,
      required: true,
    },
    kind: { type: String, required: true },
  },
  { toJSON: serializerOptions, toObject: serializerOptions }
);

export const ValidatorList = mongoose.model<ValidatorListPlain & Document>("ValidatorList", schema);
