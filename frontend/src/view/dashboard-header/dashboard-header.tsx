import { FC } from "react";

import * as text from "../../assets/text";
import { route } from "../../assets/util/routes";
import { Link } from "../atoms/link";
import { SubHeading } from "../atoms/texts";
import { ValidatorCard } from "../validator-card";
import { MetricsHeader } from "../metrics-header";
import { useLatestValidator } from "../../service";
import { OverviewEmpty } from "../overview-empty";
import { LoadingPage } from "../content-loader";

export const DashboardHeader: FC = () => {
  const { data: validator, isLoading } = useLatestValidator();

  if (isLoading) return <LoadingPage />;

  if (!validator) return <OverviewEmpty title={text.noValidatorsYet} />;

  return (
    <>
      <SubHeading>{text.latestBlock}</SubHeading>
      <Link to={`${route.validator}/latest`}>
        <ValidatorCard data={validator} />
      </Link>
      <MetricsHeader />
    </>
  );
};
