import { Divider } from "antd";
import React from "react";
import { TagAction } from "./components/action";
import { TagSpace } from "./components/tags";

const Page = () => {
  return (
    <div style={{ padding: 20 }}>
      <TagAction />
      <Divider />
      <TagSpace />
    </div>
  );
};

export default Page;
