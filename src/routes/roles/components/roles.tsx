import { Loading } from "components/loadding";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store";
import { FetchRoleStatus } from "store/roles";
import { fetchRole } from "store/roles/action";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { Theme } from "theme";
import { Role } from "./role";
import { Tools } from "./tools";

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
    dispatch(fetchRole(query))
  }, [query])

  const onSearch = (e: any) => {
    query.set("keyword", e.target.value);
    setQuery(query)
  }

  return (
    <Container>
      <ThemeProvider theme={theme.tableTheme}>
        <Tools></Tools>
      </ThemeProvider>
      <Loading
        loading={
          rolesState.fetchStatus === FetchRoleStatus.NoAction ||
          rolesState.fetchStatus === FetchRoleStatus.Loading
        }
        size="20px"
      >
        <RolesContainer>
          <ThemeProvider theme={theme.widgetTheme}>
            {rolesState.roles.map((role, index) => (
              <Role data={role} key={index} />
            ))}
          </ThemeProvider>
        </RolesContainer>
      </Loading>
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
