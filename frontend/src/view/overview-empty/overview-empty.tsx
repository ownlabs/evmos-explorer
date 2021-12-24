import React, { FC } from "react";

import { EmptyPageIllustration } from "./styles";
import { CenteredContainer, SubHeading } from "../atoms";

interface OverviewEmptyProps {
  title: string;
}

export const OverviewEmpty: FC<OverviewEmptyProps> = ({ title }) => {
  return (
    <CenteredContainer>
      <SubHeading>{title}</SubHeading>
      <EmptyPageIllustration />
    </CenteredContainer>
  );
};
