import React, { useState } from "react";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { Text } from "./text";
import { Input } from "./input";
import { Icons } from "common";
import { ApiCaller } from "service";

type TableToolsProps<T> = {
  tableName: string;
  api?: ApiCaller<T>;
};

export function TableTools<T>(props: TableToolsProps<T>) {
  const theme = useTheme();
  const [hidden, setHidden] = useState(true);
  return (
    <Container>
      <TableName>{props.tableName}</TableName>
      <ThemeProvider theme={theme.searchBar}>
        <Search>
          <SearchInput
            onFocus={() => {
              setHidden(false);
            }}
            onBlur={() => {
              setHidden(true);
            }}
            onChange={() => {}}
            placeHolder="Search"
            type="text"
            headIcon={Icons.SearchIcon}
          />
          <SearchResult hidden={hidden} />
        </Search>
      </ThemeProvider>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const TableName = styled(Text)`
  font-size: 20px;
  margin-right: auto;
`;

const Search = styled.div`
  position: relative;
  z-index: 1000;
`;

const SearchInput = styled(Input)`
  top: 100%;
  left: 100%;
`;

const SearchResult = styled.div`
  height: 100px;
  width: 100%;
  background-color: black;
  position: absolute;
  z-index: 100;
  display: ${(props) => (props.hidden ? "hidden" : "block")};
`;
