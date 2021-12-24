import styled from "styled-components";

import { SearchIcon } from "../../assets/icons";
import { Row } from "../atoms/container";
import { Input } from "../atoms/input";
import { color, margins } from "../../design-system";
import { HorizontalBorder } from "../atoms";

interface SearchProps {
  showSearchInput: boolean;
}

export const SearchInput = styled(Input)`
  border: none;
  width: 100%;
`;

export const SearchContainer = styled.div<SearchProps>`
  margin: ${margins.small} ${margins.medium} 0px ${margins.small};
  width: 100%;
  ${Row} {
    margin-bottom: 0px;
  }

  ${({ showSearchInput }): string => {
    return showSearchInput
      ? `
        visibility: visible;
        opacity: 1;
      `
      : `
        ${HorizontalBorder} {
          visibility: hidden;
          opacity: 0;
          transition: visibility 3s, opacity 0.5s linear;
        }

        ${SearchInput} {
          visibility: hidden;
          opacity: 0;
          transition: visibility 3s, opacity 0.5s linear;
        }
      `;
  }};
`;

export const IconMagnifyingGlass = styled(SearchIcon)`
  width:${margins.medium};
  height: ${margins.medium};
  margin-top: ${margins.nano};

  cursor: pointer;
  path {
    fill: ${color.white};
  }
`;
