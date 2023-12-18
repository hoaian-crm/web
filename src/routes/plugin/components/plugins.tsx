import { Space } from "antd";
import React, { useEffect } from "react";
import { usePlugin } from "store/plugins";
import { EmailPlugin } from "../plugins/email";
import { SkypePlugin } from "../plugins/skype";

export const Plugins = () => {
  const { fetch } = usePlugin();

  useEffect(() => {
    fetch({
      limit: "10",
      keyword: ""
    });
  }, [])

  return (
    <Space size="large">
      <EmailPlugin />
      <SkypePlugin />
    </Space>
  );
};
