import { Logo } from "common/logo";
import React, { useEffect, useState } from "react";
import { useTags } from "store/tag/hook";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "theme";
import { FetchStatus } from "type/FetchStatus";
import { Navbar } from "./components/navbar";
import { Header } from "./components/header";
import { Col, Layout, Row, Typography, theme } from "antd";
import { PublicImages } from "common";

export type LayoutProps = {
  children?: React.ReactNode;
};

const LayoutProvider = (props: LayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const tags = useTags();
  const {token} = theme.useToken();

  useEffect(() => {
    if (tags.fetch.status === FetchStatus.NoAction) {
      tags.fetchTag();
    }
  }, []);

  return (
      <Layout style={{ minHeight: "100%" }}>
        <Layout.Sider
          width={250}
          collapsed={collapsed}
          theme="light"
          breakpoint="xs"
          style = {{boxShadow: token.boxShadowTertiary}}
        >
          {/* <div */}
          {/*   style={{ width: "100%", display: "flex", justifyContent: "center" }} */}
          {/* > */}
          {/*   <Logo width={200} height={80} /> */}
          {/* </div> */}
          <Row align="middle" style={{padding: token.padding}}>
            <Col>
              <img src={PublicImages.MainLogo} width={50}/>
            </Col>
            <Col style = {{marginLeft: 10}}>
              <Typography.Title level={4}>Relation C</Typography.Title>
            </Col>
          </Row>
          <Navbar />
        </Layout.Sider>
        <Layout style={{ minHeight: "100%" }}>
          <Header />
          <Layout.Content>
            {props.children}
          </Layout.Content>
        </Layout>
      </Layout>
  );
};

export default LayoutProvider;
