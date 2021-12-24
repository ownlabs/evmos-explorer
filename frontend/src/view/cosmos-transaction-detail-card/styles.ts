import styled from "styled-components";

import { margins } from "../../design-system";
import { RoundBox } from "../atoms/container";

export const TransactionOverviewContainer = styled(RoundBox)`
  display: flex;
  flex-direction: column;
  padding: ${margins.medium};
  margin-bottom: ${margins.medium};
`;
