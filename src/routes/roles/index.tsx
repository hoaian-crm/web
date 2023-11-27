import { PageContainer } from "components/container";
import { Header } from "components/header";
import { Modal } from "components/modal";
import React from "react";
import { Permissions } from "./components/permissions";
import { Roles } from "./components/roles";

const Page: React.FC = (props) => {
  return (
    <PageContainer>
      <Header title="Roles Management" />
      <Permissions />
      <Roles />
      <Modal />
    </PageContainer>
  );
};

export default Page;
