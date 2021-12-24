export interface Metrics {
  _id?: string;
  blockCount: number;
  avgBlockTime: number;
  avgBlockTime24h: number;
  avgTxPerBlock: number;
  txCount: number;
  txsInLast24h: number;
  validatorCount: number;
  timestamp: number;
}
