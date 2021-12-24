import { TransactionPlain } from "@evmos-blockexplorer/types";
import mongoose, { Document, Schema } from "mongoose";

const serializerOptions: mongoose.ToObjectOptions = {
  virtuals: true,
  versionKey: false,
};

const schema = new Schema(
  {
    hash: { type: String, required: true, unique: true },
    transactionIndex: { type: Number, required: false },
    blockHash: { type: String, required: true },
    blockNumber: { type: Number, required: true },
    timestamp: { type: Number, required: true },
    from: { type: String, required: true },
    to: { type: String, required: true },
    gas: { type: Number, required: true },
    gasPrice: { type: Number, required: true },
    input: { type: Number, required: false },
    nonce: { type: Number, required: true },
    value: { type: Number, required: true },
    v: { type: Number, required: true },
    r: { type: String, required: true },
    s: { type: String, required: true },

    block: { type: Schema.Types.ObjectId, ref: "Block", required: true },

    kind: { type: String, required: true },
  },
  { toJSON: serializerOptions, toObject: serializerOptions }
);

export const Transaction = mongoose.model<TransactionPlain & Document>("Transaction", schema);
