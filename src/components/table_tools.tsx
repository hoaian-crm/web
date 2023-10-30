import React, { ChangeEventHandler, MouseEventHandler, useState } from "react";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { Text } from "./text";
import { Input } from "./input";
import { Icons } from "common";

type TableToolsProps<T> = {
  tableName: string;
  results: Array<T>;
  ResultComponent: React.FC<
    {
      data: T;
    } & any
  >;
  search: string;
  onSearch: ChangeEventHandler<HTMLInputElement>;
  onResultClick?: (result: T) => void;
  onSubmit?: () => void;
};

export function TableTools<T>(props: TableToolsProps<T>) {
  const theme = useTheme();
  const [focus, setFocus] = useState(false);

  return (
    <Container>
      <TableName>{props.tableName}</TableName>
      <ThemeProvider theme={theme.searchBar}>
        <Search id="123">
          <SearchInput
            placeHolder="Search"
            type="text"
            headIcon={Icons.SearchIcon}
            onChange={props.onSearch}
            value={props.search}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                props.onSubmit && props.onSubmit();
              }
            }}
          />
          <ResultContainer focus={focus}>
            {props.results?.map((result, index) => {
              return (
                <props.ResultComponent
                  key={index}
                  data={result}
                  onClick={() => {
                    props?.onResultClick && props.onResultClick(result);
                  }}
                />
              );
            })}
          </ResultContainer>
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
  min-width: 200px;
`;

const ResultContainer = styled.div<{ focus: boolean }>`
  position: absolute;
  width: 100%;
  display: ${(props) => (props.focus ? "flex" : "none")};
  flex-direction: column;
  background-color: ${(props) => props.theme.backgroundColor};
  box-sizing: border-box;
  margin-top: 20px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  border-radius: 10px;
  gap: 10px;
  max-height: 400px;
  overflow-y: scroll;
  overflow-x: hidden;
`;
