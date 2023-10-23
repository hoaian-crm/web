import { Icons } from "common";
import { Header } from "components/header";
import { Table } from "components/table";
import { CellTypes } from "components/table_cell";
import React from "react";
import styled from "styled-components";
import { IUser } from "type/user";

export const Users: React.FC = (props) => {
  return (
    <Container>
      <Header title="User Management"></Header>
      <Table<IUser>
        total={20}
        records={fakeDataUsers}
        limit={10}
        name="Users in system"
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
                content: "Inactive"
              },
              true: {
                value: true,
                content: "Active"
              }
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
