import React, { FC } from "react";
import { TransactionPopulated } from "@evmos-blockexplorer/types";

import { Link } from "../atoms/link";
import { Badge } from "../atoms/badges";
import { HeaderHorizontalBorder } from "../atoms/lines";
import { HeadingContainer } from "../atoms/container";
import { color } from "../../design-system/color";
import * as text from "../../assets/text";
import { TransactionOverviewContainer } from "./styles";
import { LabeledDataBase } from "../labeled-data";
import { defaultDateFormat, parseBlockDate } from "../../utils";

interface TransactionOverviewCardProps {
  link?: string;
  data: TransactionPopulated;
}

export const TransactionOverviewCard: FC<TransactionOverviewCardProps> = ({ link = "", data }) => {
  return (
    <Link to={link}>
      <TransactionOverviewContainer>
        <HeadingContainer>
          <LabeledDataBase label={text.transactionId} data={data._id} />
          <Badge uppercase backgroundColor={color.opaquePurple}>
            {text.evm}
          </Badge>
          <LabeledDataBase label={text.transactionHash} data={data.hash} />
          <Badge backgroundColor={color.lightBlack}>{defaultDateFormat(parseBlockDate(data.timestamp))}</Badge>
        </HeadingContainer>
        <HeaderHorizontalBorder />
        <HeadingContainer>
          <LabeledDataBase label={text.blockHash} data={data.blockHash} />
          <Badge backgroundColor={color.purple}>{text.blockNum(data.blockNumber)}</Badge>
        </HeadingContainer>
      </TransactionOverviewContainer>
    </Link>
  );
};
