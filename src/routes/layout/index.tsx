import { SearchOutlined } from "@ant-design/icons";
import { Input, Layout } from "antd";
import { PublicImages } from "common";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "theme";
import { Navbar } from "./components/navbar";

export type LayoutProps = {
  children?: React.ReactNode;
};

const LayoutProvider = (props: LayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ThemeProvider theme={LightTheme}>
      <Layout>
        <Layout.Sider width={250} collapsed={collapsed} theme="light" breakpoint="xs" >
          <img
            src={PublicImages.MainLogo}
            style={{
              width: "100%",
              paddingRight: 20,
              paddingLeft: 20,
              marginBottom: 30,
              paddingTop: 10,
            }}
            alt=""
          ></img>
          <Navbar />
        </Layout.Sider>
        <Layout>
          <Layout.Header
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div></div>
            <Input
              placeholder="Search features"
              style={{ maxWidth: 200 }}
              size="large"
              suffix={<SearchOutlined />}
            />
          </Layout.Header>
          <Layout.Content style={{ minHeight: "100vh" }}>{props.children}</Layout.Content>
        </Layout>
      </Layout>
    </ThemeProvider>
  );
};

export default LayoutProvider;
