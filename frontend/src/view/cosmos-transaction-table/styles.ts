import styled from "styled-components";

import { SingleRowContainer } from "../atoms/table";
import { color } from "../../design-system";

export const TransactionRowContainer = styled(SingleRowContainer)`
  &:hover {
    background-color: ${color.grey};
  }
`;
