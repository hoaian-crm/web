import { PlusOutlined, TagFilled } from "@ant-design/icons";
import { Button, Col, Input, Row, Typography, theme } from "antd";
import React from "react";
import { useTags } from "store/tag/hook";

export const TagAction = () => {
  const tags = useTags();
  const { token } = theme.useToken();

  return (
    <Row gutter={[10, 10]} align="middle">
      <Col span="12">
        <Row align="middle">
          <Typography.Title level={4}>
            <TagFilled style={{ color: token.colorPrimary }} /> Tag Management
          </Typography.Title>
        </Row>
        <Row>
          <Typography.Text strong type="secondary">
            Manage your tag in system
          </Typography.Text>
        </Row>
      </Col>
      <Col span={"12"}>
        <Row justify="end" align="middle" gutter={[10, 0]}>
          <Col>
            <Button icon={<PlusOutlined />} type="primary" size="large">
              Create
            </Button>
          </Col>
          <Col>
            <Input.Search placeholder="Search tag" size="large"></Input.Search>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
