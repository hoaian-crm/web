import { Col, Row, Space } from "antd";
import React from "react";
import { useSale } from "store/sale/hook";
import { TopProductSale } from "./components/top_product_sale";
import { TotalRevenue } from "./components/total_revenue";
import { TotalRevenueProduct } from "./components/top_revenue_product";

const Page = () => {
    return (
        <Space style={{ padding: 10, width: "100%" }} direction="vertical">
            <Row justify="space-around" gutter={[20, 20]} style={{ marginTop: 20 }}>
                <Col span={16}>
                    <TotalRevenueProduct />
                </Col>
                <Col span={8} />
            </Row>
            <Row justify="space-around" gutter={[20, 20]}>
                <Col xs={24} sm={24} md={24} lg={24} xxl={12}>
                    <TopProductSale />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xxl={12}>
                    <TotalRevenue />
                </Col>
            </Row>
        </Space>
    );
};

export default Page;
