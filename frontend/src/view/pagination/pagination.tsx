import React, { FC, useMemo } from "react";

import { DirectionIcon } from "../../assets/icons";
import { SubTitle } from "../atoms";
import { PaginationContainer, Block } from "./styles";
import { pageList } from "./util";
import { ellipsis } from "../../assets/text";
import { usePagination } from "../../contexts";

interface PaginationProps {
  pages: number;
}

export const Pagination: FC<PaginationProps> = ({ pages }) => {
  const { page, setPage } = usePagination();

  const pagesArr = useMemo(() => pageList(page, pages), [page, pages]);

  const increment = () => {
    if (page === pages) return;
    setPage(page + 1);
  };

  const decrement = () => {
    if (page === 1) return;
    setPage(page - 1);
  };

  const pickPage = (newPage: string) => {
    const numPage = Number(newPage);
    if (isNaN(numPage)) return;
    setPage(numPage);
  };

  return (
    <PaginationContainer>
      <Block onClick={decrement} arrowIcon={true} disabled={page === 1}>
        <DirectionIcon direction="left" />
      </Block>
      {pagesArr.map((p) => (
        <Block key={p} onClick={() => pickPage(p)} active={page === Number(p)} disabled={p === ellipsis}>
          <SubTitle>{p}</SubTitle>
        </Block>
      ))}
      <Block onClick={increment} arrowIcon={true} disabled={page === pages}>
        <DirectionIcon direction="right" />
      </Block>
    </PaginationContainer>
  );
};
