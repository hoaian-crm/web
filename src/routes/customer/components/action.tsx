import { EditOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import React from "react";
import { ICustomer } from "type/customer";

export const CustomerAction = ({ data }: { data: ICustomer }) => {

  return (
    <Row gutter={[5, 0]}>
      <Col>
        <Button
          icon={<EditOutlined />}
          type="primary"
          shape="circle"
        />
      </Col>
      {/* <Col>
        <Button icon={<MailOutlined />} type="primary" shape="circle" />
      </Col> */}
    </Row>
  );
};
