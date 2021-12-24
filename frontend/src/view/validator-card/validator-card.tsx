import React, { FC } from "react";
import { ValidatorListPlain } from "@evmos-blockexplorer/types";

import { Badge } from "../atoms/badges";
import { Row } from "../atoms/container";
import { color } from "../../design-system/color";
import * as text from "../../assets/text";
import { numberFormatter } from "../../utils/number";
import { Divider, ValidatorContainer, ValidatorBadge, DataLabel } from "./styles";
import { LabeledDataBase } from "../labeled-data";
import { LabeledDataContainer } from "../labeled-data/styles";

interface ValidatorCardProps {
  data: ValidatorListPlain;
}

export const ValidatorCard: FC<ValidatorCardProps> = ({ data }) => {
  return (
    <ValidatorContainer>
      <Row>
        <ValidatorBadge backgroundColor={color.purple}>{text.blockNum(data.blockNumber)}</ValidatorBadge>
        <Divider />
        <LabeledDataContainer>
          <DataLabel>{text.votingPower}</DataLabel>
        </LabeledDataContainer>
        <LabeledDataBase
          label={text.mean}
          data={<Badge backgroundColor={color.opaquePurple}>{numberFormatter.format(data.meanVotingPower)}</Badge>}
        />
        <LabeledDataBase
          label={text.median}
          data={<Badge backgroundColor={color.opaquePurple}>{numberFormatter.format(data.medianVotingPower)}</Badge>}
        />
        <LabeledDataBase
          label={text.total}
          data={<Badge backgroundColor={color.opaquePurple}>{numberFormatter.format(data.totalVotingPower)}</Badge>}
        />
      </Row>
    </ValidatorContainer>
  );
};
