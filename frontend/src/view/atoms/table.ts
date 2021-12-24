import styled from "styled-components";

import { RoundBox } from "./container";
import { SubTitle } from "./texts";
import { color, fontSize, fontWeight, margins } from "../../design-system";

interface FlexProps {
  size?: number;
}

export const TableEntry = styled.span<FlexProps>`
  font-weight: ${fontWeight.light};
  font-size: ${fontSize.subtitle};
  display: flex;
  word-break: break-all;
  white-space: initial;
  margin-right: ${margins.small};
  ${({ size }): string => {
    return size
      ? `
      &&& {
        flex: ${size}
      }
      `
      : "flex: 1 ";
  }};
`;

export const TableRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

interface TableProps {
  smallTable?: boolean;
}

export const TableContainer = styled(RoundBox)<TableProps>`
  padding: ${margins.medium};
  border: 1px solid ${color.white};
  ${({ smallTable }): string => {
    return smallTable
      ? "max-height: 400px;"
      : "max-height: 800px;";
  }};

  overflow-y: scroll;
  white-space: nowrap;
`;

export const SingleRowContainer = styled(TableRow)`
  padding: ${margins.mini} ${margins.mini} ${margins.mini} 0px;

  ${TableEntry} {
    flex: 1;
  }

  &&:last-child {
    margin-bottom: 0;
  }

`;

export const ColumnLabel = styled(SubTitle)<FlexProps>`
  margin-bottom: ${margins.nano};
  text-transform: uppercase;
  color: ${color.offWhite};
  font-size: 15px;
  white-space: initial;
  ${({ size }): string => {
    return size
      ? `
      &&& {
        flex: ${size}
      }
      `
      : "flex: 1 ";
  }}
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${margins.small};

  ${ColumnLabel} {
    flex: 1;
  }
`;
