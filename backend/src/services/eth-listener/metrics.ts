import { BlockCreation, BlockPlain, BlockPopulated, Metrics, ValidatorListPlain } from "@evmos-blockexplorer/types";
import { handleNewBlock } from ".";
import { DAY_IN_MILLISECONDS } from "../../constants";
import { blockCore, metricsCore, transactionCore } from "../../core";
import { jsTimestampToEvmos, logger } from "../../util";

export const initMetrics = async () => {
  const count = await metricsCore.count();
  if (count > 0) {
    logger.info("Initial Metrics Already in DB, skipping initialization");
    return;
  }
  const initialMetrics: Metrics = {
    blockCount: 0,
    avgBlockTime: 4,
    avgBlockTime24h: 4,
    avgTxPerBlock: 10,
    txCount: 0,
    txsInLast24h: 0,
    validatorCount: 0,
    timestamp: new Date().getTime(),
  };
  await metricsCore.create(initialMetrics);
  const firstBlock = await getFirstBlock({ forceMetrics: true });
  const initialMetricsFirstBlock: Metrics = {
    blockCount: 0,
    avgBlockTime: 4,
    avgBlockTime24h: 4,
    avgTxPerBlock: 10,
    txCount: 0,
    txsInLast24h: 0,
    validatorCount: 0,
    timestamp: firstBlock.timestamp,
  };
  await metricsCore.create(initialMetricsFirstBlock);
};

export const updateMetrics = async (newBlock: BlockCreation, latestValidatorList?: ValidatorListPlain): Promise<void> => {
  const currentTime = Date.now();
  let initialMetrics = await metricsCore.getOne({ blockCount: 0 });

  if (!initialMetrics) {
    await initMetrics();
    initialMetrics = await metricsCore.getOne({ blockCount: 0 });
    if (!initialMetrics) throw new Error("A problem occurred when calculating metrics");
  }
  // First block is currently unreachable, earlies block is 100th
  const firstBlock = await getFirstBlock();
  const totalBlocks = newBlock.number;
  const totalTxs = await transactionCore.count();
  const txsInLast24h = await transactionCore.query({
    timestamp: { $gte: jsTimestampToEvmos(currentTime) - jsTimestampToEvmos(DAY_IN_MILLISECONDS) },
  });
  const blocksInLast24h = await blockCore.query({
    timestamp: { $gte: jsTimestampToEvmos(currentTime) - jsTimestampToEvmos(DAY_IN_MILLISECONDS) },
  });

  const validatorCount = latestValidatorList?.validators.length || 0;

  const newMetrics: Metrics = {
    blockCount: newBlock.number,
    avgBlockTime: calculateBlockTimeAvg(firstBlock.timestamp, newBlock.timestamp, newBlock.number),
    avgBlockTime24h: blocksInLast24h[0]
      ? calculateBlockTimeAvg(blocksInLast24h[0].timestamp, blocksInLast24h[blocksInLast24h.length - 1].timestamp, blocksInLast24h.length)
      : 0,
    avgTxPerBlock: totalTxs / totalBlocks || 0,
    txCount: totalTxs,
    txsInLast24h: txsInLast24h.length,
    validatorCount,
    timestamp: newBlock.timestamp,
  };
  await metricsCore.create(newMetrics);
};

const calculateBlockTimeAvg = (firstBlockTime: number, newBlockTime: number, blockCount: number): number =>
  Math.abs(newBlockTime - firstBlockTime) / blockCount;

const getFirstBlock = async (options?: { forceMetrics?: boolean }): Promise<BlockPlain | BlockPopulated> => {
  let block;
  try {
    block = await blockCore.getOne({ number: 100 });
  } catch (e) {
    logger.debug(e);
    await handleNewBlock(100, { hideLog: false, skipWebSocket: true, forceMetrics: options?.forceMetrics || false });
    block = await blockCore.getOne({ number: 100 });
  }
  return block;
};
