import React, { FC } from "react";

import * as text from "../../assets/text";
import { route } from "../../assets/util";
import { color } from "../../design-system";
import { GenericError } from "../error/generic-error";
import { BaseRoute, ValidatorDetailCard, LoadingPage, BackToOverviewHeader } from "../../view";
import { useLatestValidator } from "../../service/validator";

export const Validator: FC = () => {
  const { data: validator, isLoading } = useLatestValidator();

  if (isLoading) return <LoadingPage />;

  if (!validator) return <GenericError returnRoute={route.dashboard} />;

  return (
    <BaseRoute>
      <BackToOverviewHeader
        primaryTitle={text.validatorForBlock}
        secondaryTitle={validator.blockNumber}
        button={text.back}
        backgroundColor={color.opaquePurple}
      />
      <ValidatorDetailCard data={validator} />
    </BaseRoute>
  );
};
