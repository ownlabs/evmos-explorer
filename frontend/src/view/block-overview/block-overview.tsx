import { FC } from "react";
import { BlockPopulated } from "@evmos-blockexplorer/types";

import { Badge, HeaderHorizontalBorder, Row } from "../atoms";
import { color } from "../../design-system";
import { BlockOverviewContainer, BlockRow } from "./styles";
import * as text from "../../assets/text";
import { defaultDateFormat, parseBlockDate } from "../../utils";
import { LabeledDataBase, LabeledDataUpperCase } from "../labeled-data";
import { TransactionTable } from "../transaction-table";
import { CosmosTransactionTable } from "../cosmos-transaction-table";

interface BlockOverviewProps {
  data: BlockPopulated;
}

export const BlockOverview: FC<BlockOverviewProps> = ({ data }) => {
  const blockDate = parseBlockDate(data.timestamp);
  return (
    <BlockOverviewContainer>
      <BlockRow>
        <LabeledDataBase label={text.blockHash} data={data.hash} />
        <Badge backgroundColor={color.purple}>{text.blockNum(data.number)}</Badge>
      </BlockRow>
      <HeaderHorizontalBorder />
      <LabeledDataBase label={text.date} data={defaultDateFormat(blockDate)} />
      <HeaderHorizontalBorder />
      <LabeledDataBase label={text.parentHash} data={data.parentHash} />
      <HeaderHorizontalBorder />
      {Boolean(data.totalDifficulty) && <LabeledDataBase label={text.totalDifficulty} data={data.totalDifficulty} />}
      <LabeledDataBase label={text.difficulty} data={data.difficulty} />
      <HeaderHorizontalBorder />
      <Row>
        <LabeledDataBase label={text.gasLimit} data={<Badge backgroundColor={color.opaquePurple}>{data.gasLimit}</Badge>} />
        <LabeledDataBase label={text.gasUsed} data={<Badge backgroundColor={color.opaquePurple}>{data.gasUsed}</Badge>} />
      </Row>
      <HeaderHorizontalBorder />
      <LabeledDataBase label={text.miner} data={data.miner} />
      <HeaderHorizontalBorder />
      {Boolean(data.stateRoot) && <LabeledDataBase label={text.stateRoot} data={data.stateRoot} />}
      {Boolean(data.transactionsRoot) && (
        <>
          <LabeledDataBase label={text.transactionsRoot} data={data.transactionsRoot} />
          <HeaderHorizontalBorder />
        </>
      )}
      <LabeledDataBase label={text.nonce} data={data.nonce} />
      {Boolean(data.logsBloom) && <LabeledDataBase label={text.logsBloom} data={data.logsBloom} />}
      {Boolean(data.extraData) && <LabeledDataBase label={text.extraData} data={data.extraData} />}
      <HeaderHorizontalBorder />
      <LabeledDataBase label={text.lastCommitHash} data={data.consensusInfo.lastCommitHash} />
      <LabeledDataBase label={text.dataHash} data={data.consensusInfo.dataHash} />
      <LabeledDataBase label={text.validatorsHash} data={data.consensusInfo.validatorsHash} />
      <LabeledDataBase label={text.nextValidatorsHash} data={data.consensusInfo.nextValidatorsHash} />
      <LabeledDataBase label={text.consensusHash} data={data.consensusInfo.consensusHash} />
      <LabeledDataBase label={text.appHash} data={data.consensusInfo.appHash} />
      <LabeledDataBase label={text.lastResultsHash} data={data.consensusInfo.lastResultsHash} />
      <LabeledDataBase label={text.evidenceHash} data={data.consensusInfo.evidenceHash} />
      <LabeledDataBase label={text.proposerAddress} data={data.consensusInfo.proposerAddress} />
      <HeaderHorizontalBorder />

      <Row>
        <LabeledDataUpperCase label={text.evmTransactions} />
        <Badge backgroundColor={color.purple}>{data.evmTransactions.length}</Badge>
      </Row>
      <TransactionTable data={data.evmTransactions} smallTable />
      <Row>
        <LabeledDataUpperCase label={text.cosmosTransactions} />
        <Badge backgroundColor={color.purple}>{data.cosmosTransactions.length}</Badge>
      </Row>
      <CosmosTransactionTable data={data.cosmosTransactions} smallTable />
    </BlockOverviewContainer>
  );
};
