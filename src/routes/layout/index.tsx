import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { LightTheme } from "theme";
import { Button, Input, Layout, Menu, Space, Typography } from "antd";
import {
  DashboardOutlined,
  SearchOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Navbar } from "./components/navbar";
import { PublicImages } from "common";

export type LayoutProps = {
  children?: React.ReactNode;
};

const LayoutProvider = (props: LayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ThemeProvider theme={LightTheme}>
      <Layout style={{ width: "100%", height: "100%" }}>
        <Layout.Sider width={250} collapsed={collapsed} theme="light">
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
        <Layout style={{ width: "100%", height: "100%" }}>
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
          <Layout.Content style={{ height: "100%", width: "100%" }}>
            {props.children}
          </Layout.Content>
        </Layout>
      </Layout>
    </ThemeProvider>
  );
};

export default LayoutProvider;
