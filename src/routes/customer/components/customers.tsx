import { Col, Table, Typography, theme } from "antd";
import { Tags } from "components/tags";
import moment from "moment";
import React, { useEffect } from "react";
import { useCustomers } from "store/customers/hook";
import { FetchStatus } from "type/FetchStatus";
import { ICustomer } from "type/customer";
import { CustomerInformationCompound } from "./information_compound";
import { TableHeader } from "./table_header";

export const Customers = () => {
  const { fetch, customers, query, setQuery, select } = useCustomers();
  const { token } = theme.useToken();

  useEffect(() => {
    fetch(query);
  }, [query]);

  return (
    <Col style={{ padding: token.padding }} span={24}>
      <TableHeader />
      <Table<ICustomer>
        style={{ marginTop: 20 }}
        scroll={{
          x: true,
        }}
        dataSource={customers.result}
        pagination={{
          total: customers.total,
          pageSize: +(query.limit || 30),
          onChange: (page, pageSize) => {
            setQuery({
              ...query,
              limit: pageSize.toString(),
              offset: ((page - 1) * pageSize).toString(),
            });
          },
        }}
        rowKey="id"
        columns={[
          {
            key: "name",
            dataIndex: "name",
            title: "Name",
            render: (value, record) => <CustomerInformationCompound data={record} />,
          },
          {
            key: "id",
            dataIndex: "id",
            title: "Customer Id",
            render: (value: string) => (
              <Typography.Text strong>#{value}</Typography.Text>
            ),
          },
          {
            key: "phone",
            dataIndex: "phone",
            title: "Phone number",
            render: (value, record) => `🇻🇳 ${value}`,
          },
          {
            key: "age",
            dataIndex: "dob",
            title: "Age",
            sorter: true,
            render: (value) => value && moment().diff(value, "year"),
          },
          {
            key: "address",
            dataIndex: "address",
            title: "Address",
            render: (value) => value?.metadata?.name || "",
            ellipsis: {
              showTitle: true,
            },
          },
          {
            key: "tags",
            dataIndex: "tags",
            title: "Tag",
            render: (value) => <Tags data={value} />,
            width: 100,
          },
        ]}
        rowSelection={{
          onChange(selectedRowKeys) {
            select(selectedRowKeys.map((key) => key.toString()));
          },
        }}
        loading={customers.status === FetchStatus.Loading}
      />
    </Col>
  );
};
