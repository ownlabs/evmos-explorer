import { BlockPlain, CosmosTransactionPlain, TransactionPlain } from "@evmos-blockexplorer/types";
import { FilterQuery, Document } from "mongoose";

export interface QueryOptions {
  filterProperties?: { [key: string]: 0 | 1 };
  populated?: boolean;
  limit?: number;
  skip?: number;
}

export interface Range {
  from: number;
  to: number;
}

export type BlockFilterQuery = FilterQuery<BlockPlain & Document<any, any, any>>;
export type TransactionFilterQuery = FilterQuery<TransactionPlain & Document<any, any, any>>;
export type CosmosTransactionFilterQuery = FilterQuery<CosmosTransactionPlain & Document<any, any, any>>;
