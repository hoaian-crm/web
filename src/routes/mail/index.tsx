import { Space, Tabs, Typography } from "antd";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ResultTable } from "./component/result_table";
import { Templates } from "./component/templates";

const Page = () => {

  const { source } = useParams();
  const navigate = useNavigate();

  return (
    <Space
      direction="vertical"
      style={{ padding: 20, width: "100%" }}
    >
      <Tabs
        activeKey={source ? source : "./"}
        onChange={(e) => {
          navigate(e, { relative: 'route' })
        }}
        items={[{
          key: './',
          label: <Typography.Title level={5}>Mails</Typography.Title>,
          children: <ResultTable />
        }, {
          key: 'templates',
          label: <Typography.Title level={5}>Templates</Typography.Title>,
          children: <Templates />
        }]}
      />
    </Space>
  );
};

export default Page;
