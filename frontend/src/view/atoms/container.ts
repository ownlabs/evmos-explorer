import styled from "styled-components";

import { color, margins } from "../../design-system";
import { Badge } from "./badges";

interface RoundBoxProps {
  disabled?: boolean;
}

export const RoundBox = styled.div<RoundBoxProps>`
  background-color: ${color.lightBlack};
  border-radius: ${margins.mini};
  ${({ disabled }): string => {
    return disabled
      ? `
        && {
          cursor: default;
          opacity: 0.8
        }
      `
      : "";
  }};
`;

interface FlexBoxContainerProps {
  size?: number;
}

export const FlexBoxContainer = styled.div<FlexBoxContainerProps>`
  ${({ size }): string => {
    return size
      ? `
      &&& {
        flex: ${size}
      }
      `
      : "flex: 1 ";
  }}
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${margins.mini};
`;

export const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${margins.medium};
  align-items: center;
  width: 100%;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${margins.medium};
  align-items: center;
  width: 100%;
`;

export const HeadingContainer = styled(Row)`
  ${Badge} {
    margin-left: ${margins.large}
  }
`;
