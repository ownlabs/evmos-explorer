// import { BlockCreation } from "@evmos-blockexplorer/types";

// // TODO: delete this file

// export const fakeBlock: BlockCreation[] = [
//   {
//     hash: "0x5d15649e25d8f3e2c0374946078539d200710afc977cdfc6a977bd23f20fa8e8",
//     parentHash: "0x1e77d8f1267348b516ebc4f4da1e2aa59f85f0cbd853949500ffac8bfc38ba14",
//     number: 5,
//     difficulty: 3,
//     extraData:
//       "CapsfasfasfasfasfasfasfasfasfasfturepCapsfasfasfasfasfasfasfasfasfasfture paymentdetailsaymentCapsfasfasfasfasfasfasfasfasfasfture paymentdetailsdetails",
//     gasLimit: 3,
//     gasUsed: 5,
//     logsBloom: "",
//     miner: "CapsfasfasfasfafasfasfasfasfCapsfasfasfasfasfas",
//     nonce: "CapsfasfasfasfafasfasfasfasfCapsfasfasfasfasfas",
//     stateRoot: "",
//     timestamp: 5,
//     totalDifficulty: 5,
//     transactionsRoot:
//       "CapsfasfasfasfasfasfasfasfasfasfturepCapsfasfasfasfasfasfasfasfasfasfture paymentdetailsaymentCapsfasfasfasfasfasfasfasfasfasfture paymentdetailsdetails",
//     kind: "block-creation",
//     evmTransactions: [
//       {
//         hash: "0xfe88c94d860f01a17f961bf4bdfb6e0c6cd10d3fda5cc861e805ca1240c58553",
//         blockHash: "0x5d15649e25d8f3e2c0374946078539d200710afc977cdfc6a977bd23f20fa8e8",
//         blockNumber: 5,
//         from: "CapsfasfasfasfasfasfasfasfasfasftentdetailsaymentCapsfasfasfasfasfasfasfasfasfasfture paymentdetailsdetails",
//         to: "Capntdetailsdetails",
//         gas: 2,
//         gasPrice: 2000,
//         input: 10,
//         nonce: 50,
//         transactionIndex: 1,
//         value: 100,
//         v: 3,
//         r: "sdjansdasd",
//         s: "dahjsdas",
//         kind: "evm-transaction-creation",
//         data: "",
//       },
//     ],
//     cosmosTransactions: [
//       {
//         hash: "0xD085138D913993919295FF4B0A9107F1F2CDE0D37A87CE0644E217CBF3B49656",
//         height: 368,
//         timestamp: 368000,
//         tx: {
//           msg: ["yo"],
//           fee: {
//             gas: "0.042",
//             amount: [
//               {
//                 denom: "stake",
//                 amount: 50,
//               },
//             ],
//           },
//           memo: "N/A",
//           signature: {
//             signature: "MEUCIQD02fsDPra8MtbRsyB1w7bqTM55Wu138zQbFcWx4+CFyAIge5WNPfKIuvzBZ69MyqHsqD8S1IwiEp+iUb6VSdtlpgY=",
//             pub_key: {
//               type: "tendermint/PubKeySecp256k1",
//               value: "Avz04VhtKJh8ACCVzlI8aTosGy0ikFXKIVHQ3jKMrosH",
//             },
//             account_number: 0,
//             sequence: 0,
//           },
//         },
//         result: {
//           log: "some log",
//           gas_wanted: 200000,
//           gas_used: 26354,
//           tags: [
//             {
//               key: "string",
//               value: "string",
//             },
//           ],
//         },
//         kind: "cosmos-transaction-creation",
//       },
//       {
//         hash: "0xD085138D913993919295FF4B0A9107F1F2CDE0D37A87CE0644E217CBF3B49655",
//         height: 369,
//         timestamp: 368001,
//         tx: {
//           msg: ["yo"],
//           fee: {
//             gas: "0.042",
//             amount: [
//               {
//                 denom: "stake",
//                 amount: 50,
//               },
//             ],
//           },
//           memo: "N/A",
//           signature: {
//             signature: "MEUCIQD02fsDPra8MtbRsyB1w7bqTM55Wu138zQbFcWx4+CFyAIge5WNPfKIuvzBZ69MyqHsqD8S1IwiEp+iUb6VSdtlpgY=",
//             pub_key: {
//               type: "tendermint/PubKeySecp256k1",
//               value: "Avz04VhtKJh8ACCVzlI8aTosGy0ikFXKIVHQ3jKMrosH",
//             },
//             account_number: 0,
//             sequence: 0,
//           },
//         },
//         result: {
//           log: "some log",
//           gas_wanted: 200000,
//           gas_used: 26354,
//           tags: [
//             {
//               key: "string",
//               value: "string",
//             },
//           ],
//         },
//         kind: "cosmos-transaction-creation",
//       },
//     ],
//   },
//   {
//     hash: "0x5d15649e25d8f3e2c0374946078539d200710afc977cdfc6a977bd23f20fa8e9",
//     parentHash: "0x1e77d8f1267348b516ebc4f4da1e2aa59f85f0cbd853949500ffac8bfc38ba14",
//     number: 3,
//     difficulty: 4,
//     extraData:
//       "CapsfasfasfasfasfasfasfasfasfasfturepCapsfasfasfasfasfasfasfasfasfasfture paymentdetailsaymentCapsfasfasfasfasfasfasfasfasfasfture paymentdetailsdetails",
//     gasLimit: 4,
//     gasUsed: 6,
//     logsBloom: "",
//     miner: "CapsfasfasfasfafasfasfasfasfCapsfasfasfasfasfas",
//     nonce: "CapsfasfasfasfafasfasfasfasfCapsfasfasfasfasfas",
//     stateRoot: "",
//     timestamp: 4,
//     totalDifficulty: 6,
//     transactionsRoot:
//       "CapsfasfasfasfasfasfasfasfasfasfturepCapsfasfasfasfasfasfasfasfasfasfture paymentdetailsaymentCapsfasfasfasfasfasfasfasfasfasfture paymentdetailsdetails",
//     kind: "block-creation",
//     evmTransactions: [
//       {
//         hash: "0x1e77d8f1267348b516ebc4f4da1e2aa59f85f0cbd853949500ffac8bfc38ba14",
//         blockHash: "0x5d15649e25d8f3e2c0374946078539d200710afc977cdfc6a977bd23f20fa8e9",
//         blockNumber: 3,
//         from: "CapsfasfasfasfasfasfasfasfasfasftentdetailsaymentCapsfasfasfasfasfasfasfasfasfasfture paymentdetailsdetails",
//         to: "Capntdetailsdetails",
//         gas: 4,
//         gasPrice: 5000,
//         input: 10,
//         nonce: 40,
//         transactionIndex: 2,
//         value: 200,
//         v: 4,
//         r: "sdjansdasd",
//         s: "dahjsdas",
//         kind: "evm-transaction-creation",
//         data: "",
//       },
//     ],
//     cosmosTransactions: [],
//   },
// ];
