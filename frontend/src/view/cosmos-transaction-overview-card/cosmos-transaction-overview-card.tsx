import React, { FC } from "react";
import { CosmosTransactionPopulated } from "@evmos-blockexplorer/types";

import { Link } from "../atoms/link";
import { Badge } from "../atoms/badges";
import { HeaderHorizontalBorder } from "../atoms/lines";
import { HeadingContainer } from "../atoms/container";
import { color } from "../../design-system/color";
import * as text from "../../assets/text";
import { TransactionOverviewContainer } from "./styles";
import { LabeledDataBase } from "../labeled-data";
import { defaultDateFormat, parseBlockDate } from "../../utils/date-and-time";

interface CosmosTransactionOverviewCardProps {
  link?: string;
  data: CosmosTransactionPopulated;
}

export const CosmosTransactionOverviewCard: FC<CosmosTransactionOverviewCardProps> = ({ link = "", data }) => {
  return (
    <Link to={link}>
      <TransactionOverviewContainer>
        <HeadingContainer>
          <LabeledDataBase label={text.transactionId} data={data._id} />
          <Badge backgroundColor={color.lightBlack}>{defaultDateFormat(parseBlockDate(data.timestamp))}</Badge>
          <Badge uppercase backgroundColor={color.opaquePurple}>
            {text.cosmos}
          </Badge>
        </HeadingContainer>
        <HeaderHorizontalBorder />
        <HeadingContainer>
          <LabeledDataBase label={text.messages} data={data.tx.msg.length} />
          <Badge backgroundColor={color.purple}>{text.heightNum(data.height)}</Badge>
        </HeadingContainer>
      </TransactionOverviewContainer>
    </Link>
  );
};
