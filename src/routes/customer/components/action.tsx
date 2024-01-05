import { EditOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ICustomer } from "type/customer";

export const CustomerAction = ({ data }: { data: ICustomer }) => {
  const navigate = useNavigate();

  return (
    <Row gutter={[5, 0]}>
      <Col>
        <Button
          icon={<EditOutlined />}
          type="primary"
          shape="circle"
          size="small"
          onClick={() => navigate(`./${data.id}`)}
        />
      </Col>
      {/* <Col>
        <Button icon={<MailOutlined />} type="primary" shape="circle" />
      </Col> */}
        </Row>
    );
};
