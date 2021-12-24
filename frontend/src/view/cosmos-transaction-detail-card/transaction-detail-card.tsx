import React, { FC } from "react";
import { CosmosTransactionPopulated } from "@evmos-blockexplorer/types";

import { Row, HeadingContainer } from "../atoms/container";
import { Badge } from "../atoms/badges";
import { HeaderHorizontalBorder } from "../atoms/lines";
import { color } from "../../design-system/color";
import * as text from "../../assets/text";
import { TransactionOverviewContainer } from "./styles";
import { LabeledDataBase } from "../labeled-data";
import { defaultDateFormat, parseBlockDate } from "../../utils/date-and-time";

interface CosmosTransactionDetailCardProps {
  transaction: CosmosTransactionPopulated;
}

export const CosmosTransactionDetailCard: FC<CosmosTransactionDetailCardProps> = ({ transaction }) => {
  const { fee, memo, msg } = transaction.tx;

  return (
    <TransactionOverviewContainer>
      <HeadingContainer>
        <LabeledDataBase label={text.transactionId} data={transaction._id} />
        <Badge backgroundColor={color.purple}>{text.heightNum(transaction.height)}</Badge>
      </HeadingContainer>

      <HeaderHorizontalBorder />
      <HeadingContainer>
        <LabeledDataBase label={text.timestamp} data={defaultDateFormat(parseBlockDate(transaction.timestamp))} />
        <Badge uppercase backgroundColor={color.opaquePurple}>
          {text.cosmos}
        </Badge>
      </HeadingContainer>

      <HeaderHorizontalBorder />
      <HeadingContainer>
        <LabeledDataBase label={text.messages} data={msg.length} />
      </HeadingContainer>

      <HeaderHorizontalBorder />
      <LabeledDataBase label={text.gasLimit} data={<Badge backgroundColor={color.opaquePurple}>{fee.gasLimit || 0}</Badge>} />
      {fee.amount?.map((amount, index) => (
        <Row key={index}>
          <LabeledDataBase label={text.denomFee} data={amount.denom} />
          <LabeledDataBase label={text.feeAmount} data={amount.amount} />
        </Row>
      ))}

      <HeaderHorizontalBorder />
      <LabeledDataBase label={text.memo} data={memo} />
      {transaction.tx.signerInfos.map((singerInfo, i) => (
        <Row key={i}>
          <LabeledDataBase
            label={text.signatureSequence}
            data={<Badge backgroundColor={color.opaquePurple}>{singerInfo.sequence}</Badge>}
          />
        </Row>
      ))}
    </TransactionOverviewContainer>
  );
};
