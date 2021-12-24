import cliProgress from "cli-progress";
import { getBlockNumber, handleNewBlock } from "./";
import { blockCore } from "../../core";
import { createRange, logger } from "../../util";

export const findMissingBlocks = async (): Promise<number[]> => {
  logger.info("🔎  Looking for missing blocks...");

  const dbBlockNumbers = (await blockCore.query({}, { filterProperties: { number: 1, _id: 0 } })).map((block) => block.number);
  const latestBlock = await getBlockNumber();
  const range = createRange(latestBlock - 101, 100, { descending: true });
  let missingBlockHeights: number[] = [];
  for (const i of range) !dbBlockNumbers.includes(i) && missingBlockHeights.push(i);

  logger.info(`${missingBlockHeights.length > 0 ? "🟡 " + missingBlockHeights.length : "🟢  0"} blocks missing`);
  return missingBlockHeights;
};

export const fetchMissingBlocks = async (): Promise<void> => {
  const missingBlockHeights = await findMissingBlocks();
  if (missingBlockHeights.length === 0) return;

  logger.info("Fetching missing blocks...");

  const fetchingBlocksProgress = new cliProgress.Bar({
    format: " >> [\u001b[32m{bar}\u001b[0m] {percentage}% | ETA: {eta}s | {value}/{total}",
    barCompleteChar: "|",
    barIncompleteChar: " ",
    stopOnComplete: true,
  });

  // SEQUENTIAL FETCHING
  fetchingBlocksProgress.start(missingBlockHeights.length, 0);
  for (const height of missingBlockHeights) {
    try {
      await handleNewBlock(height, { hideLog: true, skipWebSocket: true });
    } catch (e: unknown) {
      logger.error(`block error: ${height}`, e);
    }
    fetchingBlocksProgress.increment();
  }
  fetchingBlocksProgress.stop();
};
