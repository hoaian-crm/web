import { Divider, theme } from "antd";
import React from "react";
import { TagAction } from "./components/action";
import { TagSpace } from "./components/tags";
import { Constants } from "common/constant";

const Page = () => {
  const { token } = theme.useToken();
  return (
    <div style={{
      maxWidth: Constants.MAX_WIDTH_CONTAINER,
      marginLeft: "auto",
      marginRight: "auto",
      backgroundColor: token.colorBgContainer,
      padding: token.padding,
      borderRadius: token.borderRadiusLG,
      boxShadow: token.boxShadow,
    }}>
      <TagAction />
      <Divider />
      <TagSpace />
    </div>
  );
};

export default Page;
