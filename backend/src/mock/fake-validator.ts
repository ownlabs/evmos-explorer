import { ValidatorListCreation } from "@evmos-blockexplorer/types";

// TODO: delete this file

export const fakeValidators: ValidatorListCreation[] = [
  {
    blockNumber: 12,
    totalVotingPower: 500,
    meanVotingPower: 100,
    medianVotingPower: 120,
    validators: [
      {
        address:
          "CapsfasfasfasfasfasfasfasfasfasfturepCapsfasfasfasfasfasfasfasfasfasfture paymentdetailsaymentCapsfasfasfasfasfasfasfasfasfasfture paymentdetailsdetails",
        pubKey: {
          type: "0x0009",
          value: "Capsfasfasfasfasfasfa",
        },
        votingPower: 300,
        proposerPriority: 5,
      },
    ],
    blockRef: "blockId",
    kind: "validator-list-creation",
  },
  {
    blockNumber: 13,
    totalVotingPower: 5002,
    meanVotingPower: 1002,
    medianVotingPower: 1202,
    validators: [
      {
        address:
          "CapsfasfasfasfasfasfasfasfasfasfturepCapsfasfasfasfasfasfasfasfasfasfture paymentdetailsaymentCapsfasfasfasfasfasfasfasfasfasfture paymentdetailsdetails",
        pubKey: {
          type: "ssh",
          value: "Capsfasfasfasfasfasfa",
        },
        votingPower: 3002,
        proposerPriority: 52,
      },
    ],
    blockRef: "blockId",
    kind: "validator-list-creation",
  },
];
