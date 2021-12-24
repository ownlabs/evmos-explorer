import React, { FC } from "react";

import { BackToOverviewHeader, BaseRoute, LoadingPage, TransactionDetailCard } from "../../view";
import * as text from "../../assets/text";
import { route } from "../../assets/util";
import { GenericError } from "../error/generic-error";
import { color } from "../../design-system";
import { useTransactionByRouteParam } from "../../service";

export const TransactionDetail: FC = () => {
  const { data: transaction, isLoading } = useTransactionByRouteParam();

  if (isLoading) return <LoadingPage />;

  if (!transaction) return <GenericError returnRoute={route.evmtransactions} />;

  return (
    <BaseRoute>
      <BackToOverviewHeader
        primaryTitle={text.transactionInBlock}
        secondaryTitle={transaction.blockNumber}
        button={text.back}
        backgroundColor={color.opaquePurple}
      />
      <TransactionDetailCard data={transaction} />
    </BaseRoute>
  );
};
