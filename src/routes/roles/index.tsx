import { PageContainer } from "components/container";
import { Header } from "components/header";
import React from "react";
import { Permissions } from "./components/permissions";
import { Roles } from "./components/roles";

const Page: React.FC = (props) => {
  return (
    <PageContainer>
      <Header title="Roles Management" />
      <Permissions />
      <Roles />
    </PageContainer>
  );
};

export default Page;
