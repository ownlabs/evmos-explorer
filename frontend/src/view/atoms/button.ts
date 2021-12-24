import styled from "styled-components";

import { color, fontSize, fontWeight, margins } from "../../design-system";

interface ButtonProps {
  backgroundColor?: string;
  fontColor?: string;
}

export const ButtonBase = styled.button<ButtonProps>`
  text-transform: uppercase;
  display: inline-block;
  transition: all 0.4s ease 0s;
  padding: ${margins.small} ${margins.large};
  font-size: ${fontSize.subtitle};
  cursor: pointer;
  border-radius: ${margins.mini};

  background: ${(props): string => props.backgroundColor || color.purple};
  font-weight: ${fontWeight.bold};
  color: ${(props): string => props.fontColor || color.white};
  border: none;

  ${({ disabled }): string => {
    return disabled
      ? `
        && {
          cursor: default;
          opacity: 0.4
        }
      `
      : "";
  }};
`;
