import { CosmosTransactionPlain } from "@evmos-blockexplorer/types";
import mongoose, { Document, Schema } from "mongoose";

const serializerOptions: mongoose.ToObjectOptions = {
  virtuals: true,
  versionKey: false,
};

const FeeAmountSchema = new Schema({
  denom: { type: String, required: true },
  amount: { type: Number, required: true },
})

const FeeSchema = new Schema({
  gasLimit: { type: Number, required: true },
  amount: {
    type: [FeeAmountSchema],
    required: false,
  },
});

const TxSchema = new Schema({
  msg: {
    type: [{
      type: { type: String, required: false },
      value: { type: Schema.Types.Mixed, required: true },
    }],
  },
  fee: FeeSchema,
  memo: { type: String },
  signatures: { type: Buffer },
  signerInfos: {
    type: [{
      sequence: { type: Number },
      publicKey: { type: Schema.Types.Mixed }
    }]
  }
});

const schema = new Schema(
  {
    height: { type: Number, required: true },
    timestamp: { type: Number, required: true },
    tx: TxSchema,
    block: { type: Schema.Types.ObjectId, ref: "Block", required: true },
    kind: { type: String, required: true },
  },
  { toJSON: serializerOptions, toObject: serializerOptions }
);

export const CosmosTransaction = mongoose.model<CosmosTransactionPlain & Document>("CosmosTransaction", schema);
