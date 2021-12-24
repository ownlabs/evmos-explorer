import { FC } from "react";
import { TransactionPlain } from "@evmos-blockexplorer/types";

import { HorizontalBorder } from "../atoms/lines";
import { Link } from "../atoms/link";
import { ColumnLabel, TableContainer, TableEntry, TableHeader } from "../atoms/table";
import { TransactionRowContainer } from "./styles";
import * as text from "../../assets/text";
import { route } from "../../assets/util/routes";
import { defaultDateFormat, parseBlockDate } from "../../utils";

interface TransactionTableProps {
  data: TransactionPlain[];
  smallTable?: boolean;
}

export const TransactionTable: FC<TransactionTableProps> = ({ data, smallTable = false }) => {
  if (data.length === 0) return <></>;

  return (
    <TableContainer smallTable={smallTable}>
      <TableHeader>
        <ColumnLabel>{text.transactionHash}</ColumnLabel>
        <ColumnLabel>{text.timestamp}</ColumnLabel>
      </TableHeader>
      <HorizontalBorder />
      {data.map((singleItem) => {
        const { timestamp, hash } = singleItem;
        const transactionDate = parseBlockDate(timestamp);
        return (
          <Link to={`${route.evmtransactions}/${hash}`} key={hash}>
            <TransactionRowContainer>
              <TableEntry>{hash}</TableEntry>
              <TableEntry>{defaultDateFormat(transactionDate)}</TableEntry>
            </TransactionRowContainer>
            <HorizontalBorder />
          </Link>
        );
      })}
    </TableContainer>
  );
};
