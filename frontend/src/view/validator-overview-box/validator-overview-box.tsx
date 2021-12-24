import { FC } from "react";

import { SubHeading } from "../atoms/texts";
import * as text from "../../assets/text";
import { ValidatorCard } from "../validator-card";
import { ValidatorTable } from "../validator-table";
import { useLatestValidator } from "../../service";
import { OverviewEmpty } from "../overview-empty";
import { LoadingPage } from "../content-loader";

export const ValidatorOverviewBox: FC = () => {
  const { data: validator, isLoading } = useLatestValidator();

  if (isLoading) return <LoadingPage />;

  if (!validator) return <OverviewEmpty title={text.noValidatorsYet} />;

  return (
    <>
      <SubHeading>{text.latestValidators}</SubHeading>
      <ValidatorCard data={validator} />
      <ValidatorTable data={validator.validators} />
    </>
  );
};
