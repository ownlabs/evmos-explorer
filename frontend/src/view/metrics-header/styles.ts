import styled from "styled-components";

import { color, margins } from "../../design-system";
import { RoundBox } from "../atoms";

export const MetricsContainer = styled(RoundBox)`
  display: flex;
  flex-direction: column;
  padding: ${margins.medium} ${margins.huge};
`;

export const MetricsWrapper = styled.div`
  overflow-x: scroll;
  white-space: nowrap;

  box-shadow: 0px 0px ${margins.small} 0px ${color.lightBlack};
  border-radius: ${margins.mini};
  clip-path: inset(0px -20px 0px -20px);

  ${MetricsContainer} {
    display: inline-block;
    margin-right: ${margins.medium};
  }
`;
