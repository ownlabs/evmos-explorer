import React, { FC } from "react";

import * as text from "../../assets/text";
import { useBlocksPage } from "../../service";
import { BaseRoute, BlocksTable, DashboardHeader, LoadingPage, OverviewEmpty, SubHeading } from "../../view";

export const Dashboard: FC = () => {
  const { data: blocks, isLoading } = useBlocksPage(1);

  if (isLoading) return <LoadingPage />;

  if (!blocks || !blocks.length) return <OverviewEmpty title={text.noBlocksYet} />;

  return (
    <BaseRoute>
      <DashboardHeader />
      <SubHeading>{text.blocks}</SubHeading>
      <BlocksTable data={blocks} smallTable />
    </BaseRoute>
  );
};
