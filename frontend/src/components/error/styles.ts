import styled from "styled-components";

import { color, margins } from "../../design-system";
import { NotFoundIcon } from "../../assets/icons";

export const ErrorIcon = styled(NotFoundIcon)`
  path {
    fill: ${color.white};
  }
  width: 350px;
  height: 350px;
  margin-top: ${margins.mini};
  margin-bottom: ${margins.mini};
`;
