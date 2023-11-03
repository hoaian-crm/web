import { Icons } from "common";
import React, { useState } from "react";
import styled from "styled-components";
import { Input, OnChange } from "./input";

export type DefaultResultComponentProps<T> = {
  data: T;
} & any;

export type SearchProps<T> = {
  onSearch?: OnChange;
  search?: string;
  onSubmit?: () => void;
  results?: Array<T>;
  onResultClick?: (result: T) => void;
  ResultComponent?: React.FC<DefaultResultComponentProps<T>>;
};

export function Search<T>({ results = [], ...props }: SearchProps<T>) {
  const [focus, setFocus] = useState(false);

  return (
    <SearchContainer>
      <SearchInput
        placeHolder="Search"
        type="text"
        headIcon={Icons.SearchIcon}
        onChange={(e) => props.onSearch && props.onSearch(e)}
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
        {results?.map((result, index) => {
          const C =
            props.ResultComponent ||
            function () {
              return null;
            };
          return (
            <C
              key={index}
              data={result}
              onClick={() => {
                props?.onResultClick && props.onResultClick(result);
              }}
            />
          );
        })}
      </ResultContainer>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  position: relative;
  z-index: 1000;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  border-radius: 10px;
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
