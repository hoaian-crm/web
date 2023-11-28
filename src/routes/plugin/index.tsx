import React from "react";
import { Plugins } from "./components/plugins";
import { Input, Row, Space, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Page = () => {
  return (
    <Space
      direction="vertical"
      style={{ width: "100%", height: "100%", padding: 20 }}
    >
      <Row justify="space-between">
        <Typography.Title level={3}>Plugins</Typography.Title>
        <Input
          style={{ width: 200 }}
          placeholder="Search plugins"
          suffix={<SearchOutlined />}
        />
      </Row>
      <Plugins />
    </Space>
  );
};

export default Page;
