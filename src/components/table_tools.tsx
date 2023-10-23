import React from "react";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { Text } from "./text";
import { Input } from "./input";
import { Icons } from "common";

type TableToolsProps = {
  tableName: string;
};

export const TableTools: React.FC<TableToolsProps> = (props) => {
  const theme = useTheme();
  return (
    <Container>
      <TableName>{props.tableName}</TableName>
      <ThemeProvider theme={theme.searchBar}>
        <Input
          onChange={() => {}}
          placeHolder="Search" 
          type="text"
          headIcon={Icons.SearchIcon}
        />
      </ThemeProvider>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const TableName = styled(Text)`
  font-size: 20px;
  margin-right: auto;
`;
