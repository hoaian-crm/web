import React from "react";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { Search, SearchProps } from "./search";
import { Sort, SortProps } from "./sort";
import { Text } from "./text";
import { Pagination, PaginationProps } from "./pagination";

type TableToolsProps<T> = {
  tableName: string;
  children?: React.ReactNode;
};

export function TableTools<T>({
  children = [],
  ...props
}: TableToolsProps<T>) {
  const theme = useTheme();

  return (
    <Container>
      <TableName>{props.tableName}</TableName>
      {children}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
  gap: 30px;
`;

const TableName = styled(Text)`
  font-size: 20px;
  margin-right: auto;
`;
