import styled from "styled-components";
import { margins } from "../../design-system";
import { Badge, RoundBox, Row } from "../atoms";

export const BlockOverviewContainer = styled(RoundBox)`
  display: flex;
  flex-direction: column;
  padding: ${margins.medium};
`;

export const BlockRow = styled(Row)`
  ${Badge} {
    margin-left: ${margins.large}
  }
`;
