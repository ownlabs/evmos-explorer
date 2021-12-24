import mongoose from "mongoose";
import type Mongoose from "mongoose";

import { DB_NAME, DB_URI } from "../constants";
import { Block, Transaction, ValidatorList, Metrics, CosmosTransaction } from "../db/models";

let db: typeof mongoose;

const connect = async (): Promise<void> => {
  db = await mongoose.connect(`${DB_URI}/${DB_NAME}`, { autoIndex: true, autoCreate: true });
};

const close = async (): Promise<void> => {
  await db.connection.close();
};

const isValidId = (id: string | number): boolean => {
  return mongoose.Types.ObjectId.isValid(id);
};

const replaceModel = <T = Record<string, never>>(name: string, schema: Mongoose.Schema): Mongoose.Model<T & Mongoose.Document> => {
  if (db.models[name]) db.deleteModel(name);
  return db.model<T & Mongoose.Document>(name, schema);
};

const mongo = { connect, close, replaceModel, isValidId, Transaction, Block, ValidatorList, Metrics, CosmosTransaction };

export default mongo;
