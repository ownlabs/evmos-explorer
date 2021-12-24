import React, { FC } from "react";

import { useSearchByRouteParam } from "../../service/search";
import * as text from "../../assets/text";
import { route } from "../../assets/util/routes";
import {
  BaseRoute,
  LoadingPage,
  SubHeading,
  BlocksTable,
  TransactionOverviewCard,
  OverviewEmpty,
  CosmosTransactionOverviewCard,
} from "../../view";

export const Results: FC = () => {
  const { data: search, isLoading } = useSearchByRouteParam();

  if (isLoading) return <LoadingPage />;

  if (!search) return <OverviewEmpty title={text.noSearchResults} />;

  return (
    <BaseRoute>
      {Boolean(search.blocks.length) && <SubHeading>{text.blocks}</SubHeading>}
      <BlocksTable data={search.blocks} />

      {Boolean(search.evmTransactions.length) && <SubHeading>{text.evmTransactions}</SubHeading>}
      {search.evmTransactions.map((transaction, index) => (
        <TransactionOverviewCard key={index} link={`${route.evmtransactions}/${transaction.hash}`} data={transaction} />
      ))}

      {Boolean(search.cosmosTransactions.length) && <SubHeading>{text.cosmosTransactions}</SubHeading>}
      {search.cosmosTransactions.map((transaction, index) => (
        <CosmosTransactionOverviewCard key={index} link={`${route.cosmosTransactions}/${transaction._id}`} data={transaction} />
      ))}
    </BaseRoute>
  );
};
