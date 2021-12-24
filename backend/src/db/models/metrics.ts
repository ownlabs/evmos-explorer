import mongoose, { Document, Schema } from "mongoose";

import { Metrics as MetricsType } from "@evmos-blockexplorer/types";

const serializerOptions: mongoose.ToObjectOptions = {
  virtuals: true,
  versionKey: false,
};

const schema = new Schema(
  {
    blockCount: { type: Number, required: true },
    avgBlockTime: { type: Number, required: true },
    avgBlockTime24h: { type: Number, required: true },
    avgTxPerBlock: { type: Number, required: true },
    txCount: { type: Number, required: true },
    txsInLast24h: { type: Number, required: true },
    validatorCount: { type: Number, required: true },
    timestamp: { type: Number, required: true },
  },
  { toJSON: serializerOptions, toObject: serializerOptions }
);

export const Metrics = mongoose.model<MetricsType & Document>("Metrics", schema);
