import React, { FC } from "react";

import { LabeledDataProps } from "./labeled-data";
import { LabeledDataContainer, Entry, Label } from "./styles";

export interface LabeledDataBaseProps extends LabeledDataProps {
  data?: React.ReactNode;
}

export const LabeledDataBase: FC<LabeledDataBaseProps> = ({ label = "", data, customColor, disabled = false, size }) => {
  return (
    <LabeledDataContainer size={size} customColor={customColor} disabled={disabled}>
      <Label>{label}</Label>
      <Entry>{data}</Entry>
    </LabeledDataContainer>
  );
};
