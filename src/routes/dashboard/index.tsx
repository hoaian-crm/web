import { Col, Row, Space } from "antd";
import React from "react";
import { GeneralStatistic } from "./components/general_statistic";
import { TopProductSale } from "./components/top_product_sale";
import { TotalRevenueProduct } from "./components/top_revenue_product";
import { TotalRevenue } from "./components/total_revenue";

const Page = () => {
  return (
    <Space style={{ padding: 10, width: "100%" }} direction="vertical">
      <Row>
        <Col span="24">
          <GeneralStatistic />
        </Col>
      </Row>
      <Row
        justify="space-around"
        gutter={[20, 20]}
        style={{ marginBottom: 10 }}
      >
        <Col span={24}>
          <TotalRevenueProduct />
        </Col>
      </Row>
      <Row justify="space-around" gutter={[20, 20]}>
        <Col span={12}>
          <TotalRevenue />
        </Col>
        <Col span={12}>
          <TopProductSale />
        </Col>
      </Row>
    </Space>
  );
};

export default Page;
