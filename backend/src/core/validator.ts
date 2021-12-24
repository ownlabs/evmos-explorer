import { Validator, ValidatorListPlain } from "@evmos-blockexplorer/types";
import { getValidatorsByNumber } from "../services/cosmos/rpc";
import { validatorHandler as validatorDb } from "../db/handlers";
import { median } from "../util";

export const validatorCore = {
  addListByBlockNumber: async (blockNumber: number, blockDbId: string): Promise<ValidatorListPlain> => {
    // TODO: Currently left commented out because i think it will slow down catch up significantly
    // if(await validatorDb.getByBlockNumber(blockNumber)) throw new Error("Validators already added for this block")

    const validators: Validator[] = await getValidatorsByNumber(blockNumber);
    const totalVotingPower = validators.reduce((total, validator) => {
      return (total += validator.votingPower);
    }, 0);

    const meanVotingPower = totalVotingPower / validators.length;

    const medianVotingPower = median(validators.map((val) => val.votingPower));
    return validatorDb.create({
      blockNumber,
      validators,
      totalVotingPower,
      meanVotingPower,
      medianVotingPower,
      blockRef: blockDbId,
      kind: "validator-list-creation",
    });
  },

  findListByBlockNumber: async (blockNumber: number): Promise<ValidatorListPlain> => {
    return validatorDb.getOne({ blockNumber });
  },

  findLatestList: async (): Promise<ValidatorListPlain> => {
    return validatorDb.getLatest();
  },
};
