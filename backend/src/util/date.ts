export const evmosTimestampToJs = (timestamp: number): number => timestamp * 1000;
export const jsTimestampToEvmos = (timestamp: number): number => Math.floor(timestamp / 1000);
