import { Col, Grid, Row } from "antd";
import React from "react";
import { useRole } from "store/roles/hook";
import { Role } from "./role";

const { useBreakpoint } = Grid;


export const Roles = () => {
  const { roles } = useRole();
  const screens = useBreakpoint();

  const getNumCol = () => {
    if (screens.xxl) return 8;
    if (screens.xl) return 6;
    if (screens.lg) return 4;
    if (screens.md) return 3;
    if (screens.sm) return 2;
    return 1;
  }


  const dataSplicer = (length: number) => {
    const col = getNumCol();
    let result: Array<Array<number>> = [];
    for (let i = 0; i < length; i++) {
      if (!result[i % col]) result.push([]);
      result[i % col].push(i)
    }
    return result;
  }

  return (
    <Row gutter={10} style={{ width: "100%" }}>
      {
        dataSplicer(roles.length).map(col => <Col span={24 / getNumCol()}>
          {col.map(row =>
            <Row>
              <Role data={roles[row]} />
            </Row>
          )}
        </Col>)
      }
    </Row>
  );
};
