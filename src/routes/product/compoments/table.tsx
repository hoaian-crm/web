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
              {/* <Image src={record.image} height={50} /> */}
              <Image src={"data:image/png;base64,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"} height={40} style={{ borderRadius: token.borderRadiusLG }} />
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
