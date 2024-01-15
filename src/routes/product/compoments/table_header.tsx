import { DeleteFilled, ExportOutlined, PlusOutlined, TagOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Modal, Row, theme } from "antd"
import React, { useState } from "react"
import { ProductForm } from "./form";
import { useProducts } from "store/product/hook";
import { FetchStatus } from "type/FetchStatus";


export const TableHeader = () => {
  const { token } = theme.useToken();
  const [open, setOpen] = useState(false);
  const { create, createStatus } = useProducts();

  const [form] = Form.useForm();

  return <>
    <Row style={{
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
            <Button icon={<TagOutlined />} type="dashed" size="large">Tag</Button>
          </Col>
          <Col>
            <Button icon={<ExportOutlined />} size="large">Export</Button>
          </Col>
          <Col>
            <Button icon={<PlusOutlined />} size="large" type="primary" onClick={() => setOpen(true)}>Add Product</Button>
          </Col>
        </Row>
      </Col>
    </Row >
    <Modal
      title="Create Product"
      onCancel={() => setOpen(false)}
      open={open}
      onOk={() => form.submit()}
      confirmLoading={createStatus === FetchStatus.Loading}
    >
      <ProductForm form={form} onFinish={create} />
    </Modal>
  </>
}
