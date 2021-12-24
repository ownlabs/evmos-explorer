import { Document } from "mongoose";
import { BlockPlain, BlockPopulated } from "@evmos-blockexplorer/types";

import mongo from "../../services/mongo";
import { QueryOptions, logger, BlockFilterQuery } from "../../util";
import { MONGO_ERROR_CODE } from "../../constants";
import { ws } from "../../services/websocket";

export const blockHandler = {
  populate: async (plainBlock: BlockPlain & Document): Promise<BlockPopulated> => {
    const populated = await plainBlock.populate("evmTransactions cosmosTransactions");
    const lean = populated.toObject();
    const res = { ...lean, kind: "block-populated" } as unknown as BlockPopulated;
    return res;
  },

  count: async (): Promise<number> => {
    const blocks = await mongo.Block.count();
    return blocks;
  },

  getOne: async (filter: Partial<BlockPlain>, populated?: boolean): Promise<BlockPlain | BlockPopulated> => {
    const block = await mongo.Block.findOne(filter);
    if (!block) throw new Error("Block not found: ");

    if (populated) return blockHandler.populate(block);
    return block.toObject();
  },

  query: async (filter: BlockFilterQuery, options?: QueryOptions): Promise<BlockPopulated[] | BlockPlain[]> => {
    const blocks = await mongo.Block.find(filter, undefined, {
      sort: { number: -1 },
      limit: options?.limit,
      skip: options?.skip,
    });
    if (!options?.populated) return blocks.map((block) => block.toObject());
    const populatedBlocks = await Promise.all(blocks.map((block) => blockHandler.populate(block)));
    return populatedBlocks;
  },

  create: async (block: BlockPlain, options?: { skipWebSocket?: boolean }): Promise<void> => {
    // Try catch to prevent duplicate errors from throwing
    try {
      await new mongo.Block(block).save();
      !options?.skipWebSocket && ws.io?.emit("block-creation", block.number);
    } catch (e: unknown) {
      if (e instanceof Error) {
        if (e.message.substr(0, 6) === MONGO_ERROR_CODE.duplicate) {
          logger.info(`Skipping duplicate block: ${block.number}`);
        } else throw new Error(`Error adding block to db: ${e.message}`);
      }
    }
  },
};
