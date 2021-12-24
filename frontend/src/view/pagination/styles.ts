import styled from "styled-components";
import { RoundBox, SubTitle } from "../atoms";
import { color, margins } from "../../design-system";

interface PaginationProps {
  active?: boolean;
  arrowIcon?: boolean;
  disabled?: boolean;
}
export const PaginationContainer = styled.div`
  color: black;
  float: left;
  padding: 8px 16px;
  display: block;
  text-decoration: none;
  transition: background-color 0.3s;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${margins.medium};
`;

export const Block = styled(RoundBox)<PaginationProps>`
  background-color: ${color.lightBlack};
  border-radius: 4px;
  margin-right: 5px;
  padding: 0px ${margins.medium};

  ${({ active }): string => {
    return active
      ? `
      background-color: ${color.grey};
      `
      : "";
  }};

  ${({ arrowIcon }): string => {
    return arrowIcon
      ? `
      background-color: ${color.purple};
      padding: ${margins.small} 25px ${margins.small} 25px;
      `
      : "";
  }};

  ${({ disabled }): string => {
    return disabled
      ? `
      opacity: 0.4;
      cursor: default;
      `
      : "";
  }};

  ${SubTitle} {
    color: white;
  }
`;
