import styled from "styled-components";
import { color, fontSize, fontWeight, margins } from "../../design-system";

interface InputProps {
  customColor?: string;
}

export const Input = styled.input<InputProps>`
  ${({ customColor }): string => `color: ${customColor || color.white};`};
  font-weight: ${fontWeight.light};
  font-size: ${fontSize.subtitle};
  background-color: transparent;

  -moz-appearance: textfield;
  outline: none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  ::placeholder {
    opacity: 0.4;
    color: ${color.white};
    text-transform: capitalize;
  }

  ${({ customColor }): string => `border: 1px solid ${customColor || color.white};`};
  box-sizing: border-box;
  border-radius: 20px;
  padding: ${margins.mini};
`;
