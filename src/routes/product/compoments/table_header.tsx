import { DeleteFilled, ExportOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row, theme } from "antd"
import React from "react"


export const TableHeader = () => {
  const { token } = theme.useToken();
  return <Row style={{
    padding: token.paddingMD,
    backgroundColor: token.Table?.headerBg,
    borderTopLeftRadius: token.borderRadiusLG,
    borderTopRightRadius: token.borderRadiusLG
  }} justify="space-between" align="middle">
    <Col>
      <Input.Search placeholder="Searh product" size="large" />
    </Col>
    <Col>
      <Row gutter={[10, 0]}>
        <Col>
          <Button icon={<DeleteFilled />} size="large" type="primary" danger>Delete</Button>
        </Col>
        <Col>
          <Button icon={<ExportOutlined />} size="large">Export</Button>
        </Col>
        <Col>
          <Button icon={<PlusOutlined />} size="large" type="primary">Add Product</Button>
        </Col>
      </Row>
    </Col>
  </Row >
}
