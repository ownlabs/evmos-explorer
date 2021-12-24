import React, { FC } from "react";

import { ValidatorOverviewBox } from "../../view";
import { ContentContainer } from "../../view/base-route/styles";

export const ValidatorOverview: FC = () => {
  return (
    <ContentContainer>
      <ValidatorOverviewBox />
    </ContentContainer>
  );
};
