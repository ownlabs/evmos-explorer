import React, { FC } from "react";

import * as text from "../../assets/text";
import { usePagination } from "../../contexts";
import { useBlocksPage, useBlocksPagesCount } from "../../service";
import { BlocksTable, LoadingPage, OverviewEmpty, SubHeading, RouteWithPagination } from "../../view";

const BlockWithPages: FC = () => {
  const { page } = usePagination();
  const { data: blocks, isLoading } = useBlocksPage(page);

  if (isLoading) return <LoadingPage />;

  if (!blocks || !blocks.length) return <OverviewEmpty title={text.noBlocksYet} />;

  return (
    <>
      <SubHeading>{text.blocks}</SubHeading>
      <BlocksTable data={blocks} />
    </>
  );
};

export const Block: FC = () => {
  const pages = useBlocksPagesCount();

  return (
    <RouteWithPagination pages={pages}>
      <BlockWithPages />
    </RouteWithPagination>
  );
};
