import mongoose, { Document, Schema } from "mongoose";

import { BlockPlain } from "@evmos-blockexplorer/types";

const serializerOptions: mongoose.ToObjectOptions = {
  virtuals: true,
  versionKey: false,
};

const ConsensusSchema = new Schema({
  lastCommitHash: { type: String, required: true },
  dataHash: { type: String, required: true },
  validatorsHash: { type: String, required: true },
  nextValidatorsHash: { type: String, required: true },
  consensusHash: { type: String, required: true },
  appHash: { type: String, required: true },
  lastResultsHash: { type: String, required: true },
  evidenceHash: { type: String, required: true },
  proposerAddress: { type: String, required: true },
});

const schema = new Schema(
  {
    hash: { type: String, required: true, unique: true },
    parentHash: { type: String, required: true },
    number: { type: Number, required: true, index: true },
    difficulty: { type: Number, required: true },
    gasLimit: { type: Number, required: true },
    gasUsed: { type: Number, required: true },
    extraData: { type: String },
    logsBloom: { type: String },
    miner: { type: String, required: true },
    nonce: { type: String, required: true },
    stateRoot: { type: String },
    timestamp: { type: Number, required: true },
    totalDifficulty: { type: Number },
    transactionsRoot: { type: String },
    evmTransactions: { type: [{ type: Schema.Types.ObjectId, ref: "Transaction" }], required: true },
    cosmosTransactions: { type: [{ type: Schema.Types.ObjectId, ref: "CosmosTransaction" }], required: true },
    consensusInfo: ConsensusSchema,
    kind: { type: String, required: true },
  },
  { toJSON: serializerOptions, toObject: serializerOptions }
);

export const Block = mongoose.model<BlockPlain & Document>("Block", schema);
