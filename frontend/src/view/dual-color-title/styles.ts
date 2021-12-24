import styled from "styled-components";

import { color, fontSize, fontWeight, margins } from "../../design-system";

interface DualColorProps {
  customColor?: string;
}

export const TitleContainer = styled.div<DualColorProps>`
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.subHeading};
  :first-letter {
    text-transform: capitalize;
  }
`;

export const PrefixContainer = styled.span<DualColorProps>`
  color: ${(props): string => props.customColor || color.white};
  margin-right: ${margins.small};
`;

export const SuffixContainer = styled.span<DualColorProps>`
  color: ${(props): string => props.customColor || color.yellow};
`;
