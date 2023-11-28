import { SearchOutlined } from "@ant-design/icons";
import { Input, Row, Typography } from "antd";
import React from "react";

export const Header = () => {
  return (
    <Row align={"middle"} justify={"space-between"}>
      <Typography.Title level={4}>Email management</Typography.Title>
      <Input
        placeholder="Search email was sent"
        style={{ width: 250 }}
        size="large"
        suffix={<SearchOutlined />}
      />
    </Row>
  );
};
