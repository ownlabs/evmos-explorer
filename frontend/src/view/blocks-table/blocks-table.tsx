import React, { FC } from "react";
import { BlockPopulated } from "@evmos-blockexplorer/types";

import { HorizontalBorder } from "../atoms/lines";
import { Link } from "../atoms/link";
import { ColumnLabel, TableContainer, TableEntry, TableHeader } from "../atoms/table";
import { BlockRowContainer } from "./styles";
import * as text from "../../assets/text";
import { route } from "../../assets/util/routes";
import { defaultDateFormat, parseBlockDate } from "../../utils";

interface BlocksTableProps {
  data: BlockPopulated[];
  smallTable?: boolean;
}

export const BlocksTable: FC<BlocksTableProps> = ({ data, smallTable = false }) => {
  return (
    <TableContainer smallTable={smallTable}>
      <TableHeader>
        <ColumnLabel>{text.blockNumber}</ColumnLabel>
        <ColumnLabel>{text.date}</ColumnLabel>
        <ColumnLabel>{text.blockHash}</ColumnLabel>
      </TableHeader>
      <HorizontalBorder />
      {data.map((singleItem) => {
        const { number, timestamp, hash } = singleItem;
        const blockDate = parseBlockDate(timestamp);
        return (
          <Link to={`${route.block}/${number}`} key={number}>
            <BlockRowContainer>
              <TableEntry>{number}</TableEntry>
              <TableEntry>{defaultDateFormat(blockDate)}</TableEntry>
              <TableEntry>{hash}</TableEntry>
            </BlockRowContainer>
            <HorizontalBorder />
          </Link>
        );
      })}
    </TableContainer>
  );
};
