import React, { FC } from "react";
import { Validator } from "@evmos-blockexplorer/types";

import { HorizontalBorder } from "../atoms/lines";
import { ColumnLabel, SingleRowContainer, TableContainer, TableHeader } from "../atoms/table";
import { ValidatorTableEntry } from "./styles";
import * as text from "../../assets/text";

interface ValidatorTableProps {
  data: Validator[];
}

export const ValidatorTable: FC<ValidatorTableProps> = ({ data }) => {
  return (
    <TableContainer>
      <TableHeader>
        <ColumnLabel>{text.proposerPriority}</ColumnLabel>
        <ColumnLabel>{text.votingPower}</ColumnLabel>
        <ColumnLabel>{text.publicKeyType}</ColumnLabel>
        <ColumnLabel>{text.publicKeyValue}</ColumnLabel>
        <ColumnLabel>{text.address}</ColumnLabel>
      </TableHeader>
      <HorizontalBorder />
      {data.map((singleItem) => {
        const { address, pubKey, votingPower, proposerPriority } = singleItem;
        return (
          <div key={address}>
            <SingleRowContainer>
              <ValidatorTableEntry>{proposerPriority}</ValidatorTableEntry>
              <ValidatorTableEntry>{votingPower}</ValidatorTableEntry>
              <ValidatorTableEntry>{pubKey.type}</ValidatorTableEntry>
              <ValidatorTableEntry>{pubKey.value}</ValidatorTableEntry>
              <ValidatorTableEntry>{address}</ValidatorTableEntry>
            </SingleRowContainer>
            <HorizontalBorder />
          </div>
        );
      })}
    </TableContainer>
  );
};
