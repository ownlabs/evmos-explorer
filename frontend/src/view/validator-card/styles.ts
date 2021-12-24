import styled from "styled-components";

import { margins } from "../../design-system";
import { Badge } from "../atoms/badges";
import { RoundBox } from "../atoms/container";
import { HorizontalBorder } from "../atoms/lines";
import { SubTitle } from "../atoms/texts";

export const ValidatorContainer = styled(RoundBox)`
  display: flex;
  flex-direction: column;
  padding: ${margins.medium};
  margin-bottom: ${margins.medium};
`;

export const Divider = styled(HorizontalBorder)`
  transform: rotate(-90deg);
  width: 100px;
  margin: ${margins.large};
`;

export const ValidatorBadge = styled(Badge)`
  margin-top: ${margins.small};
`;

export const DataLabel = styled(SubTitle)`
  margin: ${margins.large} ${margins.nano} ${margins.medium} 0px;
  text-transform: uppercase;
`;
