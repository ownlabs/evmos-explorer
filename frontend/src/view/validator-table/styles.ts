import styled from "styled-components";

import { margins } from "../../design-system";
import { Label, LabeledDataContainer } from "../labeled-data/styles";
import { TableEntry } from "../atoms/table";

export const ValidatorTableEntry = styled(TableEntry)`
  margin-right: ${margins.small};
  ${LabeledDataContainer} {
    width: 60px;
    ${Label} {
      margin-bottom: ${margins.small};
    }
  }
`;
