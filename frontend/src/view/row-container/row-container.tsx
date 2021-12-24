import React, { FC } from "react";

import { Link } from "../atoms/link";
import { OverviewContainer } from "./styles";

export interface RowContainerProps {
  link?: string;
}

export const RowContainer:FC<RowContainerProps> = ({ link = "", children }) => {
  return (
    <Link to={link}>
      <OverviewContainer>{children}</OverviewContainer>
    </Link>
  );
};
