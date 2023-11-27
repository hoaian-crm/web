import { PageContainer } from "components/container";
import { Header } from "components/header";
import React from "react";
import { Plugins } from "./components/plugins";
import { Modal } from "components/modal";

const Page = () => {
  return (
    <PageContainer>
      <Header title="Plugins" />
      <Plugins />
    </PageContainer>
  );
};

export default Page;
