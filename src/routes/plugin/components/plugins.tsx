import React from "react";
import { usePlugin } from "store/plugins";
import { Space, Typography } from "antd";
import { Plugin } from "./plugin";

export const Plugins = () => {
  const { plugins } = usePlugin();

  // console.log(plugins)

  return (
    <Space size="large">
      {plugins.map((plugin) => (
        <Plugin data={plugin} />
      ))}
    </Space>
  );
};
