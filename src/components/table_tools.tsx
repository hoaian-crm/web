import React from "react";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { Search, SearchProps } from "./search";
import { Sort, SortProps } from "./sort";
import { Text } from "./text";
import { Pagination, PaginationProps } from "./pagination";

type TableToolsProps<T> = {
  tableName: string;
  showSort?: boolean;
  showSearch?: boolean;
} & SearchProps<T> &
  SortProps &
  PaginationProps;

export function TableTools<T>({
  showSearch = true,
  showSort = true,
  ...props
}: TableToolsProps<T>) {
  const theme = useTheme();

  return (
    <Container>
      <TableName>{props.tableName}</TableName>
      <ThemeProvider theme={theme.searchBar}>
        {showSearch && <Search<T> {...props} />}
        {showSort && <Sort {...props} />}
      </ThemeProvider>
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
