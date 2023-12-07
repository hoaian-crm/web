import { Col, Row, Space } from "antd";
import React from "react";
import { useRole } from "store/roles/hook";
import { Role } from "./role";

export const Roles = () => {
  const { roles } = useRole();
  const col = 6;

  const dataSplicer = (length: number) => {
    let result: Array<Array<number>> = [];
    for (let i = 0; i < length; i++) {
      if (!result[i % col]) result.push([]);
      result[i % col].push(i)
    }
    console.log(result)
    return result;
  }

  return (
    <Space>
      <Row gutter={10}>
        {
          dataSplicer(roles.length).map(col => <Col span={24 / 6} >
            {col.map(row =>
              <Row>
                <Role data={roles[row]} />
              </Row>
            )}
          </Col>)
        }
      </Row>
    </Space>
  );
};
