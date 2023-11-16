import React from "react";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { TableTheme, Theme } from "theme";
import Cells, { CellTypes } from "./table_cell";
import { Text } from "./text";
import { Pagination, PaginationProps } from "./pagination";
import _ from "lodash";

type TableRecord = Record<string, any>;

export type TableProps<T extends TableRecord> = {
  total: number;
  limit: number;
  records: Array<T>;
  name: string;
  columns: {
    [key in keyof T]?: {
      type: CellTypes;
      metadata?: any;
      path?: string;
      metaFunction?: (record: T) => Object;
    };
  };
  tools?: React.ReactNode;
  pagination?: PaginationProps;
};

export const Table = <T extends TableRecord>(props: TableProps<T>) => {
  const theme = useTheme() as Theme;

  return (
    <ThemeProvider theme={theme.tableTheme}>
      <Container>
        {props.tools}
        <TableCore>
          <ThemeProvider theme={theme.tableTheme.secondaryText}>
            <Row>
              {Object.keys(props.columns).map((name: string, index) => (
                <TableHead key={index}>
                  <Text>{name}</Text>
                </TableHead>
              ))}
            </Row>
            {props.records.map((record, i) => (
              <Row>
                {Object.keys(props.columns).map((name: string, j) => {
                  const Cell = Cells[props.columns[name]!.type];
                  const path = props.columns[name]?.path || name;
                  const value = _.get(record, path);
                  const metaFunction = props.columns[name]?.metaFunction;
                  let metadata = props.columns[name]?.metadata || {};
                  if (metaFunction) {
                    metadata = { ...metadata, ...metaFunction(record) };
                  }
                  return (
                    <Cell
                      key={i * j + j}
                      metadata={metadata}
                    >
                      {value}
                    </Cell>
                  );
                })}
              </Row>
            ))}
          </ThemeProvider>
        </TableCore>
        <ThemeProvider theme={theme.tableTheme.pagination}>
          <Pagination {...props.pagination} />
        </ThemeProvider>
      </Container>
    </ThemeProvider>
  );
};

// const testComponent = <Table<any> total={0} limit={0} records={[]} />;

const Container = styled.div<{ theme: TableTheme }>`
  padding: 30px 30px;
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  overflow: scroll;
  height: 100%;
`;

const TableCore = styled.table`
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  border-collapse: collapse;
`;

const TableHead = styled.th`
  text-transform: capitalize;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  padding: 10px;
  border-bottom: 2px solid ${(props) => props.theme.borderColor};
`;

const Row = styled.tr``;
