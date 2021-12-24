import styled from "styled-components";

import { margins } from "../../design-system/spacing";

export const BaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  padding: ${margins.large} ${margins.big};
  flex: 100%;
  display: flex;
  flex-direction: column;
`;
