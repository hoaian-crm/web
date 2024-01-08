import { Col, Input, Row, Typography, theme } from "antd";
import React from "react";
import { useCustomers } from "store/customers/hook";
import { DeleteCustomer } from "./delete";
import { CreateCustomerForm } from "./form";

export const TableHeader = () => {
  const { setQuery, query, selectedCustomer } = useCustomers();
  const { token } = theme.useToken();

  return (
    <Row id="table_header" align="middle">
      <Col span={12}>
        <Row justify={"start"} align={"middle"} gutter={[10, 10]}>
          <Col>
            <Input.Search
              placeholder="Search customers"
              type="primary"
              onSearch={(e) =>
                setQuery({
                  ...query,
                  keyword: e,
                })
              }
            />
          </Col>
          <Col>
            <DeleteCustomer />
          </Col>
          <Col>
            <CreateCustomerForm />
          </Col>
        </Row>
      </Col>

      <Col span={12}>
        <Row align={"middle"} gutter={[10, 10]}>
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
    </Row>
  );
};
