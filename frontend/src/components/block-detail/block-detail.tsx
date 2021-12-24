import React, { FC } from "react";

import { BackToOverviewHeader, BaseRoute, BlockOverview, LoadingPage } from "../../view";
import * as text from "../../assets/text";
import { route } from "../../assets/util";
import { GenericError } from "../error/generic-error";
import { color } from "../../design-system";
import { useBlockByRouteParam } from "../../service";

export const BlockDetail: FC = () => {
  const { data: block, isLoading } = useBlockByRouteParam();

  if (isLoading) return <LoadingPage />;

  if (!block) return <GenericError returnRoute={route.dashboard} />;

  return (
    <BaseRoute>
      <BackToOverviewHeader
        primaryTitle={text.block}
        secondaryTitle={block.number}
        button={text.back}
        backgroundColor={color.opaquePurple}
      />
      <BlockOverview data={block} />
    </BaseRoute>
  );
};
