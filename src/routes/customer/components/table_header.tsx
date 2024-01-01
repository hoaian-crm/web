import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row, Typography } from "antd"
import React from 'react';
import { CreateCustomerForm } from "./form";

export const TableHeader = () => {
    return <Row id='table_header' align="middle">
        <Col span={12}>
            <Row align={'middle'} gutter={[10, 10]}>
                <Col>
                    <Typography.Title level={4}>Customers</Typography.Title>
                </Col>
            </Row>
        </Col>
        <Col span={12} >
            <Row justify={"end"} align={"middle"} gutter={[10, 10]}>
                <Col>
                    <CreateCustomerForm />
                </Col>
                <Col>
                    <Input.Search placeholder='Search customers' type='primary' />
                </Col>
            </Row>
        </Col>
    </Row>
}