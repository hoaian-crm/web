import { Col, Image, Row, Switch, Table, Tag, Typography, theme } from "antd"
import { limitText } from "common/utils"
import { Tags } from "components/tags"
import React from "react"
import { useProducts } from "store/product/hook"
import { IProduct } from "type/product"

export const ProductTable = () => {
  const { products } = useProducts();
  const { token } = theme.useToken();


  return <Table<IProduct>
    // style={{ padding: token.paddingMD }}
    columns={[
      {
        key: 'product',
        title: "Prouct",
        width: 200,
        render: (_, record) => {
          return <Row align="middle" gutter={[10, 0]} justify={"space-around"}>
            <Col>
              <Image src={record.image} height={50} />
            </Col>
            <Col>
              <Row>
                <Typography.Text strong style={{ color: token.colorPrimary }}>{limitText(record.name, 15)}</Typography.Text>
              </Row>
              <Row>
                <Typography.Text type="secondary">{record.description}</Typography.Text>
              </Row>
            </Col>
          </Row>
        },
      },
      {
        key: 'inStock',
        dataIndex: 'inStock',
        title: "In stock",
        render: (value) => <Switch defaultChecked={value} />
      },
      {
        key: 'stock',
        dataIndex: 'stock',
        title: "In stock",
        render: (value, record) => record.inStock ? value : <Tag color="red">Not in stock</Tag>
      },
      {
        key: 'price',
        dataIndex: 'price',
        title: "Price",
      },
      {
        key: 'status',
        dataIndex: 'deletedAt',
        title: "Status",
        render: (value) => value ? <Tag color="danger">Disabled</Tag> : <Tag color="success">Active</Tag>
      },
      {
        key: 'tags',
        dataIndex: 'tags',
        title: "Tag",
        render: (value) => <Tags data={value} />
      }
    ]}
    rowSelection={{}}
    dataSource={products}
  />
}
