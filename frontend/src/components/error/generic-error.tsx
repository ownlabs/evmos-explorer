import React, { FC } from "react";
import { useHistory } from "react-router-dom";

import { ErrorIcon } from "./styles";
import { ButtonBase, CenteredContainer, SubHeading} from "../../view";
import { somethingWentWrong , goBack } from "../../assets/text";
import { route } from "../../assets/util/routes";
import { BACK } from "../../assets/util/constants";

interface ErrorProps {
  errorTitle?: string;
  returnRoute?: string;
}

export const GenericError: FC<ErrorProps> = ({ errorTitle, returnRoute }) => {
  const history = useHistory();

  const redirect = (): void => {
    if (returnRoute) {
      if (returnRoute === BACK) {
        history.goBack();
      } else {
        history.push(returnRoute);
      }
    } else {
      history.push(route.dashboard);
    }
  };

  return (
    <CenteredContainer>
      <SubHeading>{somethingWentWrong || errorTitle}</SubHeading>
      <ErrorIcon/>
      <ButtonBase
        onClick={() => {
          redirect();
        }}
      >
        {goBack}
      </ButtonBase>
    </CenteredContainer>
  );
};
