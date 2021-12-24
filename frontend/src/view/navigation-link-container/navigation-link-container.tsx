import React, { FC } from "react";

import { NavigationText } from "../atoms/texts";
import { MainRouteNavigationLinkContainer, NavText } from "./styles";

interface NavigationLinkContainerProps {
  routeName: string;
  routeType?: string;
}

export const NavigationLinkContainer: FC<NavigationLinkContainerProps> = ({ routeName, routeType = "" }) => {
  return (
    <MainRouteNavigationLinkContainer>
      <NavText>{routeType}</NavText>
      <NavigationText>{routeName}</NavigationText>
    </MainRouteNavigationLinkContainer>
  );
};
