import { Logo } from "common/logo";
import React, { useEffect, useState } from "react";
import { useTags } from "store/tag/hook";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "theme";
import { FetchStatus } from "type/FetchStatus";
import { Navbar } from "./components/navbar";
import { Header } from "./components/header";
import { Layout } from "antd";

export type LayoutProps = {
  children?: React.ReactNode;
};

const LayoutProvider = (props: LayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const tags = useTags();

  useEffect(() => {
    if (tags.fetch.status === FetchStatus.NoAction) {
      tags.fetchTag();
    }
  }, []);

  return (
    <ThemeProvider theme={LightTheme}>
      <Layout style={{ minHeight: "100%" }}>
        <Layout.Sider
          width={250}
          collapsed={collapsed}
          theme="light"
          breakpoint="xs"
        >
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Logo width={200} height={80} />
          </div>
          <Navbar />
        </Layout.Sider>
        <Layout style={{ minHeight: "100%" }}>
          <Header />
          <Layout.Content>
            {props.children}
          </Layout.Content>
        </Layout>
      </Layout>
    </ThemeProvider>
  );
};

export default LayoutProvider;
