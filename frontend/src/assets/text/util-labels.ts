import { TWO_DECIMALS } from "../util/constants";

export const blockNum = (blockNumber: number) => `block ${blockNumber}`;

export const timeInSeconds = (seconds: number) => `${seconds.toFixed(TWO_DECIMALS)} s`;
export const heightNum = (height: number) => `height ${height}`;
