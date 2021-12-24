import React, { FC } from "react";
import { FallbackProps } from "react-error-boundary";

import { ErrorIcon } from "./styles";
import { ButtonBase, Heading , CenteredContainer} from "../atoms";
import { somethingWentWrong , goBack } from "../../assets/text";

export const ErrorBoundaryFallback: FC<FallbackProps> = ({ resetErrorBoundary }): React.ReactElement => {
  return (
    <CenteredContainer>
      <Heading>{somethingWentWrong}</Heading>
      <ErrorIcon/>
      <ButtonBase
        onClick={() => {
          resetErrorBoundary();
        }}
      >
        {goBack}
      </ButtonBase>
    </CenteredContainer>
  );
};
