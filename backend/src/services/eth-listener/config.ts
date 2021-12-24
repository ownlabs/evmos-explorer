import { ethers } from "ethers";
import { ETH_RPC_URL } from "../../constants";
import { logger } from "../../util";

logger.info("⏳ Connecting to EVMOS...")
export const evmosRPC = new ethers.providers.JsonRpcProvider(ETH_RPC_URL);
logger.info("✅ EVMOS provider initialized")

export const signer = evmosRPC.getSigner()
