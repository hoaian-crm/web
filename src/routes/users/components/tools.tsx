import { Search } from "components/search";
import { TableTools } from "components/table_tools";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "store";
import { UserRow } from "./user_row";
import { IUser } from "type/user";
import { Sort } from "components/sort";
import { ThemeProvider, useTheme } from "styled-components";
import { listUsers, searchUsers } from "store/users/action";
import { ListUserQuery } from "service/user";
import { useParams } from "hooks/useParams";
import { TQuery } from "type/api";

export const Tools = () => {
  const userState = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();
  const [query, setQuery] = useParams<TQuery>({
    limit: "30",
    offset: "0",
    keyword: "",
    order: "id",
    direction: "asc",
  });
  const theme = useTheme();

  useEffect(() => {
    dispatch(searchUsers({ keyword: query.keyword, limit: "30" }));
  }, [query]);

  const reload = () => {
    dispatch(listUsers(query));
  };

  return (
    <TableTools<IUser> tableName="Users Management">
      <ThemeProvider theme={theme.searchBar}>
        <Search
          results={userState.searchResult}
          ResultComponent={UserRow}
          onSearch={(e: any) => {
            setQuery({ ...query, keyword: e.target.value });
          }}
          search={query.keyword}
          onResultClick={(result: IUser) => {
            setQuery({ ...query, keyword: result.displayName });
            reload();
          }}
          onSubmit={() => {
            reload();
          }}
        />
        <Sort
          columnOptions={[
            {
              label: "Id",
              value: "id",
            },
            {
              label: "Name",
              value: "displayName",
            },
            {
              label: "Email",
              value: "email",
            },
            {
              label: "Created At",
              value: "createdAt",
            },
          ]}
          onChangeSelectedChange={(option) => {
            setQuery({
              ...query,
              order: option.value,
            });
            reload();
          }}
          onChangeDirection={(value) => {
            if (value) {
              setQuery({
                ...query,
                direction: "desc",
              });
              reload();
            } else {
              setQuery({
                ...query,
                direction: "asc",
              });
              reload();
            }
          }}
          initValue={query.order || undefined}
        />
      </ThemeProvider>
    </TableTools>
  );
};
