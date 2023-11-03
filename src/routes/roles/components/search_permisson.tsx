import { Icons } from "common";
import { Input, OnChange } from "components/input";
import React from "react";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { InputTheme, WidgetTheme } from "theme";
import { Colors } from "theme/color";

export type SearchPermissionProps = {
  onChange: OnChange;
};

export const SearchPermission: React.FC<SearchPermissionProps> = (props) => {
  const theme = useTheme() as WidgetTheme;
  return (
    <ThemeProvider
      theme={
        {
          backgroundColor: theme.foreground.color,
          text: theme.foreground.text,
          placeHolder: theme.foreground.text,
        } as InputTheme
      }
    >
      <SearchInput
        type="text"
        placeHolder="Search permission"
        onChange={props.onChange}
        headIcon={Icons.SearchIcon}
      />
    </ThemeProvider>
  );
};

const SearchInput = styled(Input)`
  background-color: ${(props) => props.theme.foreground.color};
  color: ${(props) => props.theme.foreground.text.color};
  outline: none;
  border: none;
  border-radius: 10px;
  flex: 1;
  min-width: 200px;

  ::placeholder {
    color: ${Colors.grey03};
  }

  .input-core {
    font-size: 13px !important;
  }
`;
