import { createContext, FC, useContext, useState } from "react";

export const PaginationContext = createContext({ page: 1, setPage: (_page: number) => {} });

export const usePagination = () => useContext(PaginationContext);

export const PaginationProvider: FC = ({ children }) => {
  const [page, setPage] = useState(1);

  return <PaginationContext.Provider value={{ page, setPage }}>{children}</PaginationContext.Provider>;
};
