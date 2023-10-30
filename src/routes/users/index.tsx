import { Icons } from "common";
import { Header } from "components/header";
import { Table } from "components/table";
import { CellTypes } from "components/table_cell";
import { TableTools } from "components/table_tools";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store";
import { listUsers, searchUsers } from "store/users/action";
import styled from "styled-components";
import { IUser } from "type/user";
import { UserRow } from "./components/user_row";
import { FetchUserStatus, resetSearchResult } from "store/users/user";
import { useDebounce } from "common/utils";

export const Users: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    limit: "20",
    offset: "0",
    keyword: "",
    sort: "",
  });

  const [keyword, setKeyword] = useState(searchParams.get("keyword") || "");

  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(listUsers(searchParams));
    setKeyword(searchParams.get("keyword") || "");
  }, [searchParams]);

  useEffect(() => {
    if (!keyword) {
      dispatch(resetSearchResult());
    } else {
      dispatch(
        searchUsers({
          limit: "30",
          keyword,
        })
      );
    }
  }, [keyword]);

  return (
    <Container>
      <Header title="User Management"></Header>
      <Table<IUser>
        total={userState.total}
        records={userState.users}
        limit={Number(searchParams.get("limit"))}
        name="Users in system"
        tools={
          <TableTools<IUser>
            tableName="User data"
            results={userState.searchResult}
            ResultComponent={UserRow}
            onSearch={(e) => {
              setKeyword(e.target.value);
            }}
            search={keyword}
            onResultClick={(result) => {
              setSearchParams({ keyword: result.displayName });
            }}
            onSubmit={() => {
              setSearchParams({
                keyword,
              });
            }}
          />
        }
        columns={{
          id: {
            type: CellTypes.Text,
          },
          email: {
            type: CellTypes.Text,
          },
          displayName: {
            type: CellTypes.Text,
          },
          avatar: {
            type: CellTypes.Image,
          },
          referralCode: {
            type: CellTypes.Text,
          },
          active: {
            type: CellTypes.Boolean,
            metadata: {
              false: {
                value: false,
                content: "Inactive",
              },
              true: {
                value: true,
                content: "Active",
              },
            },
          },
        }}
      />
    </Container>
  );
};

const Container = styled.div`
  padding: 30px 30px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const fakeDataUsers: Array<IUser> = [
  {
    id: "0",
    email: "hoaian412003@gmail.com",
    displayName: "Tran Hoai An",
    avatar: Icons.UserIcon,
    referralCode: "123456",
    active: false,
  },
  {
    id: "0",
    email: "hoaian412003@gmail.com",
    displayName: "Tran Hoai An",
    avatar: Icons.UserIcon,
    referralCode: "123456",
    active: true,
  },
  {
    id: "0",
    email: "hoaian412003@gmail.com",
    displayName: "Tran Hoai An",
    avatar: Icons.UserIcon,
    referralCode: "123456",
    active: false,
  },
  {
    id: "0",
    email: "hoaian412003@gmail.com",
    displayName: "Tran Hoai An",
    avatar: Icons.UserIcon,
    referralCode: "123456",
    active: true,
  },
  {
    id: "0",
    email: "hoaian412003@gmail.com",
    displayName: "Tran Hoai An",
    avatar: Icons.UserIcon,
    referralCode: "123456",
    active: false,
  },
];
