import styled, { ThemeProvider, useTheme } from "styled-components";
import React, { useEffect } from "react";
import { TableTools } from "components/table_tools";
import { Theme } from "theme";
import { useAppDispatch, useAppSelector } from "store";
import { FetchRoleStatus } from "store/roles";
import { fetchRole } from "store/roles/action";
import { useSearchParams } from "react-router-dom";
import { Loading } from "components/loadding";
import { Role } from "./role";

export const Roles = () => {
  const theme = useTheme() as Theme;
  const rolesState = useAppSelector((state) => state.roleReducer);
  const dispatch = useAppDispatch();
  const [query, setQuery] = useSearchParams({
    limit: "10",
    offset: "0",
    keyword: "",
  });

  useEffect(() => {
    if (rolesState.fetchStatus === FetchRoleStatus.NoAction) {
      dispatch(fetchRole(query));
    }
  }, []);

  return (
    <Container>
      <ThemeProvider theme={theme.tableTheme}>
        <TableTools tableName="Roles" />
      </ThemeProvider>
      <ThemeProvider theme={theme.widgetTheme}>
        <Loading
          loading={
            rolesState.fetchStatus === FetchRoleStatus.NoAction ||
            rolesState.fetchStatus === FetchRoleStatus.Loading
          }
          size="20px"
        >
          <RolesContainer>
            {rolesState.roles.map((role, index) => (
              <Role data={role} key={index} />
            ))}
          </RolesContainer>
        </Loading>
      </ThemeProvider>
    </Container>
  );
};

const Container = styled.div`
  height: 400px;
  background-color: ${(props) => props.theme.tableTheme.backgroundColor};
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
`;

const RolesContainer = styled.div`
  margin-top: 30px;
  gap: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-self: flex-start;
`;
