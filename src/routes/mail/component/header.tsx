import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input, Row, Space, Typography } from "antd";
import React from "react";
import { CreateMail } from "./create";

export const Header = () => {
  return (
    <Row align={"middle"} justify={"space-between"}>
      <Space>
        <Typography.Title level={4}>Email management</Typography.Title>
        <CreateMail />
      </Space>
      <Input
        placeholder="Search email was sent"
        style={{ width: 250 }}
        size="large"
        suffix={<SearchOutlined />}
      />
    </Row>
  );
};
