import React, { FC } from "react";

import { NavigationBarBase } from "../navigation-bar-base";
import { MainWrap, MainPageContainer } from "./styles";

interface MainConatinerProps {
  navigationBar: React.ReactElement;
}

export const MainConatiner:FC<MainConatinerProps> = ({ navigationBar, children }) => {
  return (
    <MainWrap>
      <NavigationBarBase navigation={navigationBar} />
      <MainPageContainer>{children}</MainPageContainer>
    </MainWrap>
  );
};
