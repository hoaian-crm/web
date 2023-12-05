import { Space, Tabs, Typography } from "antd";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useMail, useTemplate } from "store/mail";
import { FetchStatus } from "type/api.d";
import { ResultTable } from "./component/result_table";
import { Templates } from "./component/templates";

const Page = () => {
  const [query, setQuery] = useSearchParams({ tab: "mails" });
  const { status: fetchTemplateStatus, fetch: fetchTemplate } = useTemplate();
  const { status: fetchMailStatus, fetch: fetchMail } = useMail();
  useEffect(() => {
    if (fetchTemplateStatus === FetchStatus.NoAction) {
      fetchTemplate({ limit: "10" });
    }
    if (fetchMailStatus === FetchStatus.NoAction) {
      fetchMail({ limit: "10" });
    }
  }, []);

  return (
    <Space direction="vertical" style={{ padding: 20, width: "100%" }}>
      <Tabs
        activeKey={query.get("tab") || ""}
        onChange={(e) => {
          setQuery({ tab: e });
        }}
        items={[
          {
            key: "mails",
            label: <Typography.Title level={5}>Mails</Typography.Title>,
            children: <ResultTable />,
          },
          {
            key: "templates",
            label: <Typography.Title level={5}>Templates</Typography.Title>,
            children: <Templates />,
          },
        ]}
      />
    </Space>
  );
};

export default Page;
