import React, { FC } from "react";
import { TransactionPopulated } from "@evmos-blockexplorer/types";

import { Row, HeadingContainer } from "../atoms/container";
import { Badge } from "../atoms/badges";
import { HeaderHorizontalBorder } from "../atoms/lines";
import { color } from "../../design-system/color";
import * as text from "../../assets/text";
import { TransactionOverviewContainer } from "./styles";
import { LabeledDataBase } from "../labeled-data";
import { defaultDateFormat, parseBlockDate } from "../../utils";

interface TransactionDetailCardProps {
  data: TransactionPopulated;
}

export const TransactionDetailCard: FC<TransactionDetailCardProps> = ({ data }) => {
  return (
    <TransactionOverviewContainer>
      <HeadingContainer>
        <LabeledDataBase label={text.transactionHash} data={data.hash} />
        <Badge uppercase backgroundColor={color.opaquePurple}>
          {text.evm}
        </Badge>
      </HeadingContainer>
      <HeaderHorizontalBorder />
      <HeadingContainer>
        <LabeledDataBase label={text.blockHash} data={data.blockHash} />
        <Badge backgroundColor={color.purple}>{text.blockNum(data.blockNumber)}</Badge>
        <LabeledDataBase label={text.blockHash} data={data.blockHash} />
        <Badge backgroundColor={color.purple}>{text.blockNum(data.blockNumber)}</Badge>
      </HeadingContainer>
      <HeaderHorizontalBorder />
      <HeadingContainer>
        <LabeledDataBase label={text.transactionHash} data={data.hash} />
        <Badge backgroundColor={color.lightBlack}>{defaultDateFormat(parseBlockDate(data.timestamp))}</Badge>
      </HeadingContainer>
      <HeaderHorizontalBorder />
      <LabeledDataBase label={text.from} data={data.from} />
      <LabeledDataBase label={text.to} data={data.to} />
      <HeaderHorizontalBorder />
      <Row>
        {Boolean(data.gas) && <LabeledDataBase label={text.gas} data={<Badge backgroundColor={color.opaquePurple}>{data.gas}</Badge>} />}
        <LabeledDataBase label={text.gasPrice} data={<Badge backgroundColor={color.opaquePurple}>{data.gasPrice}</Badge>} />
      </Row>
      <HeaderHorizontalBorder />
      {Boolean(data.input) && <LabeledDataBase label={text.input} data={data.input} />}
      <LabeledDataBase label={text.nonce} data={data.nonce} />
      <HeaderHorizontalBorder />
      <Row>
        {Boolean(data.transactionIndex) && (
          <LabeledDataBase
            label={text.transactionIndex}
            data={<Badge backgroundColor={color.opaquePurple}>{data.transactionIndex}</Badge>}
          />
        )}
        <LabeledDataBase label={text.value} data={<Badge backgroundColor={color.opaquePurple}>{data.value}</Badge>} />
      </Row>
      <HeaderHorizontalBorder />
      <LabeledDataBase label={text.data} data={data.data} />
      <HeaderHorizontalBorder />
      <LabeledDataBase label={text.v} data={data.v} />
      <LabeledDataBase label={text.r} data={data.r} />
      <LabeledDataBase label={text.s} data={data.s} />
      <HeaderHorizontalBorder />
    </TransactionOverviewContainer>
  );
};
