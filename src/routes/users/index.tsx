import { Header } from "components/header";
import { Table } from "components/table";
import { CellTypes } from "components/table_cell";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store";
import { listUsers } from "store/users/action";
import { IUser } from "type/user";
import { PageContainer } from "components/container";
import { Tools } from "./components/tools";

export const Users: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    limit: "20",
    offset: "0",
    keyword: "",
    order: "",
  });

  const dispatch = useAppDispatch();
  const userState = useAppSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(listUsers(searchParams));
  }, []);

  return (
    <PageContainer>
      <Header title="User Management"></Header>
      <Table<IUser>
        status={userState.fetchUsersStatus}
        total={userState.total}
        records={userState.users}
        limit={Number(searchParams.get("limit"))}
        name="Users in system"
        pagination={{
          total: userState.total,
          offset: userState.offset,
          limit: userState.limit,
          onChange: (e) => {
            searchParams.set("offset", (e * userState.limit).toString());
            setSearchParams(searchParams);
          },
        }}
        tools={<Tools />}
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
          role: {
            type: CellTypes.Information,
            path: "role.name",
            metaFunction: (record) => ({
              description: record.role.description,
            }),
          },
          createdAt: {
            type: CellTypes.TimeAgo,
          },
          updatedAt: {
            type: CellTypes.TimeAgo,
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
    </PageContainer>
  );
};
