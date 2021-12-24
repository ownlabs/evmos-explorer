import styled from "styled-components";

import { color , margins} from "../../design-system";
import { MoneyIcon } from "../../assets/icons";

export const EmptyPageIllustration = styled(MoneyIcon)`
  path {
    fill: ${color.white};
  }
  width: 500px;
  height: 500px;
  margin-top: ${margins.big};
`;
