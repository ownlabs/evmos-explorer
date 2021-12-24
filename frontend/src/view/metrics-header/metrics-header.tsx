import React, { FC } from "react";

import * as text from "../../assets/text";
import { TWO_DECIMALS } from "../../assets/util/constants";
import { MetricsContainer, MetricsWrapper } from "./styles";
import { LabeledDataBase } from "../labeled-data";
import { OverviewEmpty } from "../overview-empty";
import { LoadingPage } from "../content-loader";
import { useLatestMetrics } from "../../service/metrics";

export const MetricsHeader: FC = () => {
  const { data: metrics, isLoading } = useLatestMetrics();

  if (isLoading) return <LoadingPage />;

  if (!metrics ) return <OverviewEmpty title={text.noMetricsYet} />;

  return (
    <MetricsWrapper>
      <MetricsContainer>
        <LabeledDataBase label={text.blockCount} data={metrics.blockCount} />
      </MetricsContainer>
      <MetricsContainer>
        <LabeledDataBase label={text.avgBlockTime} data={text.timeInSeconds(metrics.avgBlockTime)} />
      </MetricsContainer>
      <MetricsContainer>
        <LabeledDataBase label={text.validatorCount} data={metrics.validatorCount} />
      </MetricsContainer>
      <MetricsContainer>
        <LabeledDataBase label={text.transactionCount} data={metrics.txCount} />
      </MetricsContainer>
      <MetricsContainer>
        <LabeledDataBase label={text.transactionInLastDay} data={metrics.txsInLast24h} />
      </MetricsContainer>
      <MetricsContainer>
        <LabeledDataBase label={text.avgTransactionPerBlock} data={metrics.avgTxPerBlock.toFixed(TWO_DECIMALS)} />
      </MetricsContainer>
    </MetricsWrapper>
  );
};
