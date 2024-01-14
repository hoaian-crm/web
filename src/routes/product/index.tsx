import { Constants } from "common/constant";
import React from "react";
import { ProductTable } from "./compoments/table";
import { Col, Row } from "antd";

const Page = () => {
  return <Row justify="center" style={{ maxWidth: Constants.MAX_WIDTH_CONTAINER, marginLeft: 'auto', marginRight: 'auto' }}>
    <Col span="24">
      <ProductTable />
    </Col>
  </Row>
}

export default Page;
