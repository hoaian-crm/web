import { Loading } from "components/loadding";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store";
import { fetchRole } from "store/roles/action";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { Theme } from "theme";
import { Role } from "./role";
import { Tools } from "./tools";
import { Fetch } from "components/fetch";

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
    dispatch(fetchRole(query));
  }, [query]);

  return (
    <Container status={rolesState.fetchStatus}>
      <ThemeProvider theme={theme.tableTheme}>
        <Tools></Tools>
      </ThemeProvider>
      <RolesContainer >
        <ThemeProvider theme={theme.widgetTheme}>
          {rolesState.roles.map((role, index) => (
            <Role data={role} key={index} />
          ))}
        </ThemeProvider>
      </RolesContainer>
    </Container>
  );
};

<<<<<<< Updated upstream
const Container = styled(Fetch)`
=======
const Container = styled.div`
>>>>>>> Stashed changes
  min-height: 400px;
  background-color: ${(props) => props.theme.tableTheme.backgroundColor};
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
<<<<<<< Updated upstream
  display: flex;
  flex-direction: column;
  justify-content: center;
=======
  overflow-y: scroll;
>>>>>>> Stashed changes
`;

const RolesContainer = styled.div`
  margin-top: 30px;
  gap: 10px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
  height: 100%;
  width: 100%;
`;
