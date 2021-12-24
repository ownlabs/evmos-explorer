import { FC } from "react";
import { CosmosTransactionPlain } from "@evmos-blockexplorer/types";

import { HorizontalBorder } from "../atoms/lines";
import { Link } from "../atoms/link";
import { ColumnLabel, TableContainer, TableEntry, TableHeader } from "../atoms/table";
import { TransactionRowContainer } from "./styles";
import * as text from "../../assets/text";
import { route } from "../../assets/util/routes";
import { defaultDateFormat, parseBlockDate } from "../../utils";

interface Props {
  data: CosmosTransactionPlain[];
  smallTable?: boolean;
}

export const CosmosTransactionTable: FC<Props> = ({ data, smallTable = false }) => {
  if (data.length === 0) return <></>;

  return (
    <TableContainer smallTable={smallTable}>
      <TableHeader>
        <ColumnLabel>{text.transactionId}</ColumnLabel>
        <ColumnLabel>{text.messages}</ColumnLabel>
        <ColumnLabel>{text.timestamp}</ColumnLabel>
      </TableHeader>
      <HorizontalBorder />
      {data.map((singleItem) => {
        const { timestamp, _id } = singleItem;
        const transactionDate = parseBlockDate(timestamp);
        return (
          <Link to={`${route.cosmosTransactions}/${_id}`} key={_id}>
            <TransactionRowContainer>
              <TableEntry>{_id}</TableEntry>
              <TableEntry>{singleItem.tx.msg.length}</TableEntry>
              <TableEntry>{defaultDateFormat(transactionDate)}</TableEntry>
            </TransactionRowContainer>
            <HorizontalBorder />
          </Link>
        );
      })}
    </TableContainer>
  );
};
