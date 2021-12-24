import * as dotenvFlow from "dotenv-flow";
dotenvFlow.config();

export const NODE_ENV = process.env.NODE_ENV || "development";

export const PORT = Number(process.env.PORT) || "5001";
export const CORS_ORIGIN = process.env.CORS_ORIGIN?.split(",") || ["http://localhost:3000", "http://localhost:3001"];

export const ETH_RPC_URL = process.env.ETH_RPC_URL || `http:/\/localhost:8545` || `https://ethereum.rpc.evmos.dev`;
export const ETH_RPC_WS = process.env.ETH_RPC_WS || `wss://0.0.0.0:8546`;
export const COSMOS_RPC = process.env.COSMOS_RPC || "http://localhost:26657" || `https://cosmos.rpc.evmos.dev`;
export const COSMOS_WS = process.env.COSMOS_WS || "ws://localhost:26657/websocket";

export const DB_URI = process.env.DB_URI || `mongodb://127.0.0.1:27017`;
export const DB_NAME = process.env.DB_NAME || "evmos_blockexplorer";
export const MONGO_ERROR_CODE = {
  duplicate: "E11000",
};

export const DAY_IN_MILLISECONDS = 86400000;
export const UPDATE_METRICS_BLOCK_INTERVAL = 50;
export const UPDATE_VALIDATOR_BLOCK_INTERVAL = 400;

export const CATCHUP_GROUP_SIZE = 500;
