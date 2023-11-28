import { Space } from "antd";
import React from "react";
import { Header } from "./component/header";
import { ResultTable } from "./component/result_table";

const Page = () => {
  return (
    <Space
      direction="vertical"
      style={{ padding: 20, width: "100%", height: "100%" }}
    >
      <Header />
      <ResultTable />
    </Space>
  );
};

export default Page;
