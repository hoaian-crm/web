import { Col, Row, Space } from "antd";
import React from "react";
import { useSale } from "store/sale/hook";
import { TopProductSale } from "./components/top_product_sale";
import { TotalRevenue } from "./components/total_revenue";
import { TotalRevenueProduct } from "./components/total_revenue_product";

const Page = () => {
  const { totalRevenueProduct, getTotalRevenueProduct } = useSale();

  return (
    <Space style={{ padding: 10, width: "100%" }} direction="vertical">
      <Row justify="space-around" gutter={[20, 20]}>
        <Col span="12">
          <TopProductSale />
        </Col>
        <Col span="12">
          <TotalRevenue />
        </Col>
      </Row>
      <Row>
        <Col span="24">
          <TotalRevenueProduct />
        </Col>
      </Row>
    </Space>
  );
};

export default Page;
