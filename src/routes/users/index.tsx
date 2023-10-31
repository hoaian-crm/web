import { Header } from "components/header";
import { Table } from "components/table";
import { CellTypes } from "components/table_cell";
import { TableTools } from "components/table_tools";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store";
import { listUsers, searchUsers } from "store/users/action";
import { resetSearchResult } from "store/users/user";
import styled from "styled-components";
import { IUser } from "type/user";
import { UserRow } from "./components/user_row";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";

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
            onSearch={(e: any) => {
              setKeyword(e.target.value);
            }}
            search={keyword}
            onResultClick={(result: IUser) => {
              setSearchParams({ keyword: result.displayName });
            }}
            onSubmit={() => {
              searchParams.set("keyword", keyword);
              setSearchParams(searchParams);
            }}
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
              searchParams.set("order", option.value);
              setSearchParams(searchParams);
            }}
            onChangeDirection={(value) => {
              if (value) {
                searchParams.set("direction", "desc");
                setSearchParams(searchParams);
              } else {
                searchParams.delete("direction");
                setSearchParams(searchParams);
              }
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
