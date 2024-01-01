import { Button, Col, Input, Row, Space, Table, Typography, theme } from 'antd';
import React, { useEffect } from 'react'
import { useCustomers } from 'store/customers/hook'
import { PlusOutlined } from '@ant-design/icons'
import { TableHeader } from './table_header';
import { ICustomer } from 'type/customer';
import { FetchStatus } from 'type/api.d';
import moment from 'moment';

export const Customers = () => {
  const { fetch, customers } = useCustomers();
  const { token } = theme.useToken();

  useEffect(() => {
    if (customers.status === FetchStatus.NoAction) {
      fetch({ limit: '30' })
    }
  }, [])

  return <Col
    style={{ padding: token.padding }}
    span={24}
  >
    <TableHeader />
    <Table<ICustomer>
      style={{ marginTop: 20 }}
      dataSource={customers.result}
      pagination={{
        total: customers.total, pageSize: customers.limit || 30, onChange: (page, pageSize) => {
          fetch({ offset: (page - 1) * pageSize, limit: pageSize })
        }
      }}
      columns={[{
        key: 'id',
        dataIndex: 'id',
        title: "Id"
      },
      {
        key: "name",
        dataIndex: 'name',
        title: "Name"
      },
      {
        key: "email",
        dataIndex: 'email',
        title: "Email"
      },
      {
        key: "phone",
        dataIndex: "phone",
        title: "Phone number"
      },
      {
        key: "age",
        dataIndex: "age",
        title: "Age",
        sorter: true
      },
      {
        key: "createdAt",
        dataIndex: "createdAt",
        title: "Created",
        render: (value) => moment(value).format("DD/MM/YYYY - hh:mm")
      },
      {
        key: "updatedAt",
        dataIndex: "updatedAt",
        title: "Updated",
        render: (value) => moment(value).format("DD/MM/YYYY - hh:mm")
      }
      ]}
      rowSelection={{
      }}
    />
  </Col>
}
