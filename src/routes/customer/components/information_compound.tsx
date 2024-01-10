import { faker } from "@faker-js/faker";
import { Avatar, Col, Row, Typography, theme } from "antd";
import React, { useMemo } from "react";
import { ICustomer } from "type/customer";

type Props = {
  data: ICustomer;
};
export const CustomerInformationCompound: React.FC<Props> = ({ data }) => {
  const { token } = theme.useToken();

  // const avatar = useMemo(
  //   () => (!data.avatar ? { icon: <UserOutlined /> } : { src: data.avatar }),
  //   [data.avatar]
  // );
  const avatar = useMemo(() => ({
    src: faker.internet.avatar()
  }), [data.avatar]);

  return (
    <Row gutter={[10, 10]}>
      <Col id="avatar">
        <Avatar {...avatar} size="large"></Avatar>
      </Col>
      <Col id="user_information">
        <Row>
          <Typography.Text strong style={{ color: token.colorPrimary }}>
            {data.name}
          </Typography.Text>
        </Row>
        <Row>
          <Typography.Text type="secondary">{data.email}</Typography.Text>
        </Row>
      </Col>
    </Row>
  );
};
