import { Col, Table, theme } from "antd";
import moment from "moment";
import React, { useEffect } from "react";
import { useCustomers } from "store/customers/hook";
import { FetchStatus } from "type/FetchStatus";
import { ICustomer } from "type/customer";
import { CustomerAction } from "./action";
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
            key: "id",
            dataIndex: "id",
            title: "Id",
          },
          {
            key: "name",
            dataIndex: "name",
            title: "Name",
          },
          {
            key: "email",
            dataIndex: "email",
            title: "Email",
          },
          {
            key: "phone",
            dataIndex: "phone",
            title: "Phone number",
            render: (value, record) => (record.extension || "") + " " + value,
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
          },
          {
            key: "action",
            title: "Actions",
            render: (_, record) => <CustomerAction data={record} />,
          },
        ]}
        rowSelection={{
          onChange(selectedRowKeys) {
            select(selectedRowKeys.map(key => key.toString()));
          },
        }}
        loading={customers.status === FetchStatus.Loading}
      />
    </Col>
  );
};
