import styled from "styled-components";

import { color, margins } from "../../design-system";
import { NotFoundIcon } from "../../assets/icons";

export const ErrorIcon = styled(NotFoundIcon)`
  path {
    fill: ${color.white};
  }
  width: 500px;
  height: 500px;
  margin-top: ${margins.big};
  margin-bottom: ${margins.big};
`;
