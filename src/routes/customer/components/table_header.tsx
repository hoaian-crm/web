import { Col, Input, Row, Typography } from "antd";
import React from "react";
import { useCustomers } from "store/customers/hook";
import { DeleteCustomer } from "./delete";
import { CreateCustomerForm } from "./form";

export const TableHeader = () => {
  const { setQuery, query, selectedCustomer } = useCustomers();

  return (
    <Row id="table_header" align="middle">
      <Col span={12}>
        <Row align={"middle"} gutter={[10, 10]}>
          <Col>
            <Typography.Title level={4}>Customers</Typography.Title>
          </Col>
          {selectedCustomer.length ? (
            <Col>
              <Typography.Text>
                Selected{" "}
                <Typography.Text strong>
                  {selectedCustomer.length}
                </Typography.Text>{" "}
                customers
              </Typography.Text>
            </Col>
          ) : null}
        </Row>
      </Col>
      <Col span={12}>
        <Row justify={"end"} align={"middle"} gutter={[10, 10]}>
          <Col>
            <DeleteCustomer />
          </Col>
          <Col>
            <CreateCustomerForm />
          </Col>
          <Col>
            <Input.Search
              placeholder="Search customers"
              type="primary"
              onSearch={(e) => setQuery({
                ...query,
                keyword: e
              })}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
