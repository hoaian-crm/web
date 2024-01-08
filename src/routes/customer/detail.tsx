import { Avatar, Card, Col, Row, Statistic, theme } from "antd";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCustomers } from "store/customers/hook";
import { FetchStatus } from "type/FetchStatus";

export const DetailCustomer = () => {
  const { getDetail, customerDetail } = useCustomers();
  const { customerId } = useParams();
  const { token } = theme.useToken();

  useEffect(() => {
    if (customerDetail.status === FetchStatus.NoAction) {
      getDetail({ customerId: customerId! });
    }
  }, []);

  return (
    <Row gutter={[20, 20]} style={{ padding: 20 }}>
      <Col span={10}>
        <Card>
          <Row justify="center">
            <Avatar
              src="https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-1/images/avatars/avatar-1.png"
              style={{ width: 100, height: 100 }}
            />
          </Row>
          <Row justify="space-between">
            <Col>
              <Statistic title="Total buy" value={120} />
            </Col>
            <Col>
              <Statistic title="Total sale" value={78} />
            </Col>
            <Col>
              <Statistic title="Total sale" value={78} />
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};
