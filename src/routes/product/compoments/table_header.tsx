import { DeleteFilled, ExportOutlined, PlusOutlined, TagOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Modal, Popconfirm, Row, theme, Typography } from "antd"
import React, { useState } from "react"
import { ProductForm } from "./form";
import { useProducts } from "store/product/hook";
import { FetchStatus } from "type/FetchStatus";
import { softDeleteProduct } from "store/product/action";
import { TagInput } from "components/tag_input";
import { useTags } from "store/tag/hook";


export const TableHeader = () => {
  const { token } = theme.useToken();
  const [open, setOpen] = useState(false);
  const { create, createStatus } = useProducts();
  const { selectedIds, softDeleteStatus, softDelete } = useProducts();
  const [openDelete, setOpenDelete] = useState(false);
  const [tag, setTag] = useState({ key: "", value: "" });
  const { attachTag } = useTags();

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
            <Button
              onClick={() => setOpenDelete(true)}
              disabled={selectedIds.length === 0}
              icon={<DeleteFilled />}
              size="large"
              type="primary"
              danger>
              Delete
            </Button>
          </Col>
          <Col>
            <Popconfirm title={`Attach tag to ${selectedIds.length} products`}
              icon=""
              description={
                <TagInput onChange={(e) => setTag(e)} />
              }
              onConfirm={() => attachTag({
                ...tag,
                resource: 'products',
                resource_ids: selectedIds
              })}
              okText={"Attach"}
            >
              <Button icon={<TagOutlined />} type="dashed" size="large">Tag</Button>
            </Popconfirm>
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
      <ProductForm form={form} onFinish={(value) => create(value).then(() => setOpen(false))} />
    </Modal>
    <Modal
      title="Delete product"
      okButtonProps={{ danger: true, type: "primary" }}
      okText="Delete"
      onCancel={() => setOpenDelete(false)}
      onOk={() => {
        softDelete().then(() => setOpenDelete(false));
      }}
      open={openDelete}
      confirmLoading={softDeleteStatus === FetchStatus.Loading}
    >
      <Typography.Text>
        Do you want to delete{" "}
        <Typography.Text strong>{selectedIds.length}</Typography.Text>{" "}
        product ?{" "}
      </Typography.Text>
    </Modal>
  </>
}
