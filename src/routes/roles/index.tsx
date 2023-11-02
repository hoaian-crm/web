import { PageContainer } from "components/container";
import { Header } from "components/header";
import React from "react";
import { Permissions } from "./components/permissions";

export const Roles: React.FC = (props) => {
  return (
    <PageContainer>
      <Header title="Roles Management" />
      <Permissions />
    </PageContainer>
  );
};
