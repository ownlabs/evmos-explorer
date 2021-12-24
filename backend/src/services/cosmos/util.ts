import { PubKeyNode, Validator, ConsensusSignature } from "@evmos-blockexplorer/types";

export interface RawValidator {
  address: string;
  pub_key: PubKeyNode;
  voting_power: string;
  proposer_priority: string;
}

export const underscoreValidatorToCamelCase = (rawValidator: RawValidator): Validator => {
  const { address, pub_key: pubKey, voting_power, proposer_priority } = rawValidator;
  const votingPower = parseInt(voting_power);
  const proposerPriority = parseInt(proposer_priority);
  return {
    address,
    pubKey,
    votingPower,
    proposerPriority,
  };
};

export interface RawConsensus {
  block_id_flag: number;
  validator_address: string;
  timestamp: Date;
  signature: string;
}

export const underscoreConsensusToCamelCase = (rawConsensus: RawConsensus): ConsensusSignature => {
  const { validator_address: validatorAddress, timestamp } = rawConsensus;
  return {
    validatorAddress,
    timestamp: new Date(timestamp).getTime(),
  };
};
