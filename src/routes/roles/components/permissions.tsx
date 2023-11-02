import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store";
import {
  FetchPermissionStatus,
  resetSelectPermission,
  selectPermissions,
} from "store/permissions";
import { fetchPermission } from "store/permissions/action";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { Permission } from "./permission";
import { Theme } from "theme";
import { Search } from "components/search";
import { SearchPermission } from "./search_permisson";
import { Loading } from "components/loadding";

export const Permissions: React.FC = () => {
  const theme = useTheme() as Theme;
  const [holdShift, setHoldShift] = useState(false);

  const [query, setQuery] = useState({
    limit: "10",
    offset: "0",
    keyword: "",
  });
  const permissionState = useAppSelector((state) => state.permissionReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPermission(query));
  }, [query]);

  return (
    <Container
      onKeyDown={(e) => setHoldShift(e.key === "Shift")}
      tabIndex={0}
      onKeyUp={() => setHoldShift(false)}
    >
      <Loading
        loading={
          permissionState.fetchPermissionStatus ===
          FetchPermissionStatus.NoAction
        }
        size="40px"
      >
        <ThemeProvider theme={theme.widgetTheme}>
          <SearchPermission
            onChange={(e) => {
              console.log(e.target.value);
              setQuery({
                ...query,
                keyword: e.target.value,
              });
            }}
          />
          {permissionState.result.map((permission) => (
            <Permission
              data={permission}
              onMouseDown={() => {
                dispatch(selectPermissions([permission.id]));
              }}
              onMouseUp={() => {
                if (holdShift === false) {
                  dispatch(resetSelectPermission());
                }
                dispatch(selectPermissions([permission.id]));
              }}
              isSelected={permissionState.selectedPermission[permission.id]}
            />
          ))}
        </ThemeProvider>
      </Loading>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${(props) => props.theme.tableTheme.backgroundColor};
  padding: 20px;
  display: flex;
  gap: 10px;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  flex-wrap: wrap;
  flex-flow: row wrap;
  user-select: none;
  overflow-y: scroll;
  box-sizing: border-box;
  max-height: 40%;
`;
