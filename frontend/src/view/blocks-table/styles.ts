import styled from "styled-components";

import { SingleRowContainer } from "../atoms/table";
import { color } from "../../design-system";

export const BlockRowContainer = styled(SingleRowContainer)`
  &:hover {
    background-color: ${color.grey};
  }
`;
