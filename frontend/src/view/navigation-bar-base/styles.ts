import styled from "styled-components";

import { NavigationText } from "../atoms/texts";
import { color, margins } from "../../design-system";

export const NavigationWrapper = styled.div`
  background-color: ${color.purple};
  display: flex;
  justify-content: space-between;
`;

export const TitleText = styled(NavigationText)`
  padding-left: ${margins.big};
`;
