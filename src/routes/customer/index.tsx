import { Row, theme } from "antd";
import React from "react";
import { Customers } from "./components/customers";

const Page = () => {
  const { token } = theme.useToken();

  return (
    <Row style={{ padding: token.padding }} justify="center">
      <Customers />
    </Row>
  );
};

export default Page;
