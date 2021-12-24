export interface ValidatorListBase {
  _id: string;
  blockNumber: number;
  validators: Validator[];
  totalVotingPower: number;
  meanVotingPower: number;
  medianVotingPower: number;
  blockRef: string;
}

export interface ValidatorListPlain extends ValidatorListBase {
  kind: "validator-list-plain";
}

export interface ValidatorListPopulated extends ValidatorListBase {
  kind: "validator-list-populated";
  block: import("./block").BlockPlain;
}

export interface ValidatorListCreation extends Omit<ValidatorListBase, "_id"> {
  kind: "validator-list-creation";
}

export interface PubKeyNode {
  type: string;
  value: string;
}

export interface Validator {
  address: string;
  pubKey: PubKeyNode;
  votingPower: number;
  proposerPriority: number;
}
