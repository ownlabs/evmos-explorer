import React, { FC } from "react";
import { useHistory } from "react-router-dom";

import { ButtonBase, Row } from "../atoms";
import { DualColorTitle } from "../dual-color-title";

interface BackToOverviewHeaderProps {
  primaryTitle: React.ReactNode;
  secondaryTitle?: React.ReactNode;
  button: string;
  backgroundColor?: string;
}

export const BackToOverviewHeader: FC<BackToOverviewHeaderProps> = ({ primaryTitle, secondaryTitle = "", button, backgroundColor }) => {
  const history = useHistory();

  const goBack = (): void => {
    history.goBack();
  };

  return (
    <Row>
      <DualColorTitle prefix={primaryTitle} suffix={secondaryTitle} />
      <ButtonBase backgroundColor={backgroundColor} onClick={goBack}>
        {button}
      </ButtonBase>
    </Row>
  );
};
