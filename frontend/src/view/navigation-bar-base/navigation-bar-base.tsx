import React, { FC } from "react";

import { Link } from "../atoms/link";
import { evmosBlockExplorer } from "../../assets/text";
import { route } from "../../assets/util/routes";
import { NavigationWrapper, TitleText } from "./styles";

interface NavigationBarBaseProps {
  navigation: React.ReactElement;
}

export const NavigationBarBase: FC<NavigationBarBaseProps> = ({ navigation }) => {
  return (
    <NavigationWrapper>
      <Link to={route.dashboard}>
        <TitleText>{evmosBlockExplorer}</TitleText>
      </Link>
      {navigation}
    </NavigationWrapper>
  );
};
