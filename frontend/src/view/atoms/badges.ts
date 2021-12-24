import styled from "styled-components";

import { color, margins, fontSize } from "../../design-system";

interface BadgeProps {
  customColor?: string;
  backgroundColor?: string;
  uppercase?: boolean;
}

export const Badge = styled.span<BadgeProps>`
  mix-blend-mode: normal;
  border-radius: ${margins.mini};
  padding: ${margins.mini};
  ${({ customColor }): string => `color: ${customColor || color.white};`};
  ${({ backgroundColor }): string => `background-color: ${backgroundColor || color.grey};`};
  font-size: ${fontSize.medium};
  max-height: ${margins.medium};
  ${({ uppercase  }): string => {
    return uppercase
      ? `text-transform: uppercase;`
      : `text-transform: capitalize;`;
  }};
`;
