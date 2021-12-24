import React, { FC } from "react";

import { route } from "../../assets";
import * as text from "../../assets/text";
import { usePagination } from "../../contexts";
import { useTransactionsPage, useTransactionsPagesCount } from "../../service";
import { LoadingPage, OverviewEmpty, SubHeading, TransactionOverviewCard, RouteWithPagination } from "../../view";

const TransactionOverviewWithPages: FC = () => {
  const { page } = usePagination();
  const { data: transactions, isLoading } = useTransactionsPage(page);

  if (isLoading) return <LoadingPage />;

  if (!transactions || !transactions.length) return <OverviewEmpty title={text.noTransactionsYet} />;

  return (
    <>
      <SubHeading>{text.transactions}</SubHeading>
      {transactions.map((transaction, index) => (
        <TransactionOverviewCard key={index} link={`${route.evmtransactions}/${transaction.hash}`} data={transaction} />
      ))}
    </>
  );
};

export const TransactionOverview: FC = () => {
  const pages = useTransactionsPagesCount();

  return (
    <RouteWithPagination pages={pages}>
      <TransactionOverviewWithPages />
    </RouteWithPagination>
  );
};
