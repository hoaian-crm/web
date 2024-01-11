import { Col, Input, Row, Typography, theme } from "antd";
import React from "react";
import { useCustomers } from "store/customers/hook";
import { AttachTagCustomers } from "./attach_tag";
import { DeleteCustomer } from "./delete";
import { CreateCustomerForm } from "./form";

export const TableHeader = () => {
  const { setQuery, query, selectedCustomer } = useCustomers();
  const { token } = theme.useToken();

  return (
    <Row id="table_header" align="middle" style={{ padding: token.paddingLG }}>
      <Col span={12}>
        <Row justify={"start"} align={"middle"} gutter={[10, 10]}>
          <Col>
            <Input.Search
              size="large"
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
        </Row>
      </Col>

      <Col span={12}>
        <Row justify="end" gutter={[10, 0]}>
          <Col>
            <DeleteCustomer />
          </Col>
          <Col>
            <AttachTagCustomers />
          </Col>
          <Col>
            <CreateCustomerForm />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
