import styled from "styled-components";

import { margins } from "../../design-system";
import { NavigationText } from "../atoms/texts";


export const MainRouteNavigationLinkContainer = styled.div`
  margin-bottom: ${margins.mini};
  display: flex;
  align-items: center;
`;

export const NavText = styled(NavigationText)`
  text-transform: uppercase;
  margin-right: ${margins.mini};
`;
