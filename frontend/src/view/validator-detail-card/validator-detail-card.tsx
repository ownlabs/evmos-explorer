import { FC } from "react";
import { ValidatorListPlain } from "@evmos-blockexplorer/types";

import { ValidatorCard } from "../validator-card";
import { ValidatorTable } from "../validator-table";

interface ValidatorDetailCardProps {
  data: ValidatorListPlain;
}

export const ValidatorDetailCard: FC<ValidatorDetailCardProps> = ({ data }) => {
  return (
    <>
      <ValidatorCard data={data} />
      <ValidatorTable data={data.validators} />
    </>
  );
};
