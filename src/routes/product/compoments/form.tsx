import React, { useMemo, useState } from "react";
import { Form, FormProps, Input, InputNumber, Row, Switch, Upload } from "antd"
import { IProduct } from "type/product";
import { LoadingOutlined, SyncOutlined } from "@ant-design/icons";
import { faker } from "@faker-js/faker";

export type ProductFormProps = FormProps;

export const ProductForm: React.FC<ProductFormProps> = (props) => {

  const [inStock, setInStock] = useState(true);

  return <Form<IProduct> layout="vertical" {...props}>
    <Form.Item label="Name" name="name">
      <Input.TextArea placeholder="Product Name" />
    </Form.Item>
    <Form.Item label="Image" name="image">
      <Upload beforeUpload={() => false} listType="picture-card" maxCount={1}>Upload</Upload>
    </Form.Item>
    <Form.Item label="Price" name="price">
      <InputNumber />
    </Form.Item>
    <Row>
      <Form.Item label="In Stock" name="inStock" >
        <Switch defaultChecked onChange={(e) => setInStock(e)} />
      </Form.Item>
      <Form.Item label="Stock" name="stock" >
        <InputNumber min={1} disabled={!inStock} />
      </Form.Item>
    </Row>
    <Form.Item label="Description" name="description">
      <Input.TextArea placeholder="Product Description" />
    </Form.Item>
  </Form>
}
