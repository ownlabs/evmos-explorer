import styled from "styled-components";
import { color, margins, fontSize, fontWeight } from "../../design-system";
import { FlexBoxContainer, SubTitle } from "../atoms";

interface LabeledDataProps {
  customColor?: string;
  wide?: boolean;
  disabled?: boolean;
  size?: number;
}

export const LabeledDataContainer = styled(FlexBoxContainer)<LabeledDataProps>`
  display: flex;
  flex-wrap: wrap;

  ${({ disabled }): string => {
    return disabled
      ? `
        opacity: 0.4;
      `
      : "";
  }}

  ${SubTitle} {
    width: 100%;
  }
`;

export const LabeledDataLabel = styled(SubTitle)`
  margin-bottom: ${margins.nano};
  margin-right: ${margins.medium};
  word-wrap: break-word;
`;

export const Label = styled(LabeledDataLabel)`
  margin-bottom: ${margins.nano};
  margin-right: ${margins.medium};
  text-transform: uppercase;
  color: ${color.offWhite};
  font-size: 15px;
`;


export const Entry = styled.span`
  font-weight: ${fontWeight.light};
  font-size: ${fontSize.subtitle};
  display: flex;
  word-break: break-all;
`;
