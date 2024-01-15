import React, { useMemo, useState } from "react";
import { Form, FormProps, Input, Switch, Upload } from "antd"
import { IProduct } from "type/product";
import { LoadingOutlined, SyncOutlined } from "@ant-design/icons";
import { faker } from "@faker-js/faker";

export type ProductFormProps = FormProps;

export const ProductForm: React.FC<ProductFormProps> = (props) => {

  const alias = () => (props.form?.getFieldValue('name') || "product").toLowerCase().replace(" ", "") + "#" + faker.number.int({ min: 0, max: 10000 });

  return <Form<IProduct> layout="vertical"  {...props}>
    <Form.Item label="Name" name="name">
      <Input placeholder="Product Name" />
    </Form.Item>
    <Form.Item label="Description" name="description">
      <Input placeholder="Product Description" />
    </Form.Item>
    <Form.Item label="Identify" name='alias'>
      <Input placeholder="Product Identify" suffix={<SyncOutlined onClick={() => {
        props.form?.setFieldValue('alias', alias())
      }} />}
      />
    </Form.Item>
    <Form.Item label="Image" name="image">
      <Upload beforeUpload={() => false} listType="picture-card" maxCount={1}>Upload</Upload>
    </Form.Item>
    <Form.Item label="In Stock" name="inStock">
      <Switch />
    </Form.Item>
  </Form>
}