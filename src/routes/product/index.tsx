import { Constants } from "common/constant";
import React from "react";
import { ProductTable } from "./compoments/table";
import { Col, Row, theme } from "antd";
import { TableHeader } from "./compoments/table_header";

const Page = () => {

  const { token } = theme.useToken();

  return <Row justify="center" style={{ maxWidth: Constants.MAX_WIDTH_CONTAINER, marginLeft: 'auto', marginRight: 'auto' }}>
    <Col span="24" style={{ boxShadow: token.boxShadow, borderRadius: token.borderRadiusLG, marginBottom: 20 }}>
      <TableHeader />
      <ProductTable />
    </Col>
  </Row >
}

export default Page;
