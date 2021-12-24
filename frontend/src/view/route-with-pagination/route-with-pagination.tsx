import React, { FC } from "react";
import { PaginationProvider } from "../../contexts";

import { Pagination } from "../pagination";
import { BaseWrapper, ContentContainer } from "./styles";

interface RouteWithPaginationProps {
  pages: number;
}

export const RouteWithPagination: FC<RouteWithPaginationProps> = ({ children, pages }) => {
  return (
    <PaginationProvider>
      <BaseWrapper>
        <ContentContainer>{children}</ContentContainer>
        <Pagination pages={pages} />
      </BaseWrapper>
    </PaginationProvider>
  );
};
