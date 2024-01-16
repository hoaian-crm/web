import { Constants } from "common/constant";
import React, { useEffect } from "react";
import { ProductTable } from "./compoments/table";
import { Col, Row, theme } from "antd";
import { TableHeader } from "./compoments/table_header";
import { useProducts } from "store/product/hook";

const Page = () => {

  const { token } = theme.useToken();
  const { query, fetch } = useProducts();

  useEffect(() => {
    fetch()
  }, [query])

  return <div style={{ padding: 20 }}>
    <Row justify="center" style={{ maxWidth: Constants.MAX_WIDTH_CONTAINER, marginLeft: 'auto', marginRight: 'auto' }}>
      <Col span="24" style={{ boxShadow: token.boxShadow, borderRadius: token.borderRadiusLG, marginBottom: 20 }}>
        <TableHeader />
        <ProductTable />
      </Col>
    </Row>
  </div>
}

export default Page;
