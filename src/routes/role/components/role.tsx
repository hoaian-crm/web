import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Card, Space } from "antd";
import React from "react";
import { useRole } from "store/roles/hook";
import { IRole } from "type/role";
import { Permission } from "./permission";

type Props = {
  data: IRole;
};

export const Role: React.FC<Props> = (props) => {
  const { select } = useRole();

  return (
    <Card
      onClick={() => {
        select(props.data.id);
      }}
      hoverable={true}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
      title={props.data.name}
      extra={props.data.description}
      bodyStyle={{
        padding: 10,
        minHeight: 100,
      }}
    >
      <Space wrap>
        {props.data.permissions.map((permission) => (
          <Permission data={permission} />
        ))}
      </Space>
    </Card>
  );
};
