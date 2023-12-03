import { SearchOutlined } from "@ant-design/icons";
import { Input, Row } from "antd";
import React from "react";

export const Header = () => {
  return (
    <Row align={"middle"} justify={"space-between"}>
      <Input
        placeholder="Search email was sent"
        style={{ width: 250 }}
        size="large"
        suffix={<SearchOutlined />}
      />
    </Row>
  );
};
