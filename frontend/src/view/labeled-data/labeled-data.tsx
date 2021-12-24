import React, { FC } from "react";

import { LabeledDataContainer, LabeledDataLabel, Label } from "./styles";

export interface LabeledDataProps {
  label: React.ReactNode;
  customColor?: string;
  disabled?: boolean;
  size?: number;
}

export const LabeledData: FC<LabeledDataProps> = ({ label, customColor, disabled = false, size }) => {
  return (
    <LabeledDataContainer size={size} customColor={customColor} disabled={disabled}>
      <LabeledDataLabel>{label}</LabeledDataLabel>
    </LabeledDataContainer>
  );
};

export const LabeledDataUpperCase: FC<LabeledDataProps> = ({ label, customColor, disabled = false, size }) => {
  return (
    <LabeledDataContainer size={size} customColor={customColor} disabled={disabled}>
      <Label>{label}</Label>
    </LabeledDataContainer>
  );
};
