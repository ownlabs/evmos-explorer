import React, { FC } from "react";

import { BackToOverviewHeader, BaseRoute, LoadingPage, CosmosTransactionDetailCard } from "../../view";
import * as text from "../../assets/text";
import { route } from "../../assets/util";
import { GenericError } from "../error/generic-error";
import { color } from "../../design-system";
import { useCosmosTransactionByRouteParam } from "../../service/cosmos-transactions";

export const CosmosTransactionDetail: FC = () => {
  const { data: transaction, isLoading } = useCosmosTransactionByRouteParam();

  if (isLoading) return <LoadingPage />;

  if (!transaction) return <GenericError returnRoute={route.evmtransactions} />;

  return (
    <BaseRoute>
      <BackToOverviewHeader
        primaryTitle={text.transaction}
        secondaryTitle={transaction.height}
        button={text.back}
        backgroundColor={color.opaquePurple}
      />
      <CosmosTransactionDetailCard transaction={transaction} />
    </BaseRoute>
  );
};
