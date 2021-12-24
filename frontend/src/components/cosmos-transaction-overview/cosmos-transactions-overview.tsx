import React, { FC } from "react";

import { route } from "../../assets/util/routes";
import * as text from "../../assets/text";
import { useCosmosTransactionsPage, useCosmosTransactionsPagesCount } from "../../service";
import { RouteWithPagination, LoadingPage, OverviewEmpty, SubHeading, CosmosTransactionOverviewCard } from "../../view";
import { usePagination } from "../../contexts";

const CosmosTransactionOverviewWithPages: FC = () => {
  const { page } = usePagination();
  const { data: transactions, isLoading } = useCosmosTransactionsPage(page);

  if (isLoading) return <LoadingPage />;

  if (!transactions || !transactions.length) return <OverviewEmpty title={text.noTransactionsYet} />;

  return (
    <>
      <SubHeading>{text.cosmosTransactions}</SubHeading>
      {transactions.map((transaction, index) => (
        <CosmosTransactionOverviewCard key={index} link={`${route.cosmosTransactions}/${transaction._id}`} data={transaction} />
      ))}
    </>
  );
};

export const CosmosTransactionOverview: FC = () => {
  const pages = useCosmosTransactionsPagesCount();

  return (
    <RouteWithPagination pages={pages}>
      <CosmosTransactionOverviewWithPages />
    </RouteWithPagination>
  );
};
