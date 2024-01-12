import { AlertFilled, AlertOutlined, BellOutlined, NotificationFilled, SearchOutlined } from "@ant-design/icons";
import { Avatar, Col, Input, Layout, Row, Switch, Typography, theme } from "antd"
import { Constants } from "common/constant";
import React from 'react';
import { useAuth } from "store/auth/hook";

export const Header = () => {
  const { token } = theme.useToken();
  const { currentUser } = useAuth();
  return <Layout.Header style={{ padding: token.padding }}>
    <Row
      style={{
        maxWidth: Constants.MAX_WIDTH_CONTAINER,
        boxShadow: token.boxShadowTertiary,
        backgroundColor: token.colorBgContainer,
        height: "100%",
        borderRadius: token.borderRadius,
        paddingLeft: token.padding,
        paddingRight: token.padding,
        cursor: 'pointer',
        marginLeft: "auto",
        marginRight: 'auto',
        width: "100%"
      }}
      align="middle"
      justify="space-between"
    >
      <Col>
        <Row justify="start">
          <SearchOutlined style={{ fontSize: token.sizeMD, color: token.colorTextSecondary, marginRight: 10 }} />
          <Typography.Title level={5} type="secondary">Search features</Typography.Title>
        </Row>
      </Col>
      <Col>
        <Row align="middle">
          <Switch style={{ marginRight: 10 }} />
          <BellOutlined style={{ fontSize: token.sizeMD, marginRight: 10 }} />
          <Avatar src={currentUser?.avatar}></Avatar>
        </Row>
      </Col>
    </Row >
  </Layout.Header >
}
