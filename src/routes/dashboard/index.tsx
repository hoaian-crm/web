import { Col, Row, Space } from "antd";
import moment from "moment";
import React, { useEffect } from "react";
import { useSale } from "store/sale/hook";
import { FetchStatus } from "type/api.d";
import { TotalRevenueProduct } from "./components/total_revenue_product";

const Page = () => {

    const { totalRevenueProduct, getTotalRevenueProduct } = useSale();


    return <Space style={{ padding: 10, width: "100%" }} direction="vertical">
        <Row>
            <Col span={"12"}>
                <TotalRevenueProduct />
            </Col>
        </Row>
    </Space>
}

export default Page;