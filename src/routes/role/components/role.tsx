import {
  DeleteOutlined,
  EditOutlined,
  SettingOutlined
} from "@ant-design/icons";
import { Card, Empty, Space } from "antd";
import React from "react";
import { useRole } from "store/roles/hook";
import { IRole } from "type/role";
import { Permission } from "./permission";

type Props = {
  data: IRole;
};

export const Role: React.FC<Props> = (props) => {
  const { select, detach, remove } = useRole();

  const nodata = props.data.permissions.length === 0

  return (
    <Card
      hoverable={true}
      actions={[
        <SettingOutlined key="setting"
        />,
        <EditOutlined key="edit"
          onClick={() => {
            select(props.data);
          }}
        />,
        <DeleteOutlined key="ellipsis" onClick={() => { remove({ id: props.data.id }) }} />,
      ]}
      title={props.data.name}
      extra={props.data.description}
      bodyStyle={{
        padding: 10,
        width: '100%'
      }}
      style={{ width: "100%", marginTop: 10 }}
    >
      <Space wrap style={{ width: '100%', justifyContent: nodata ? 'center' : 'left' }}>
        {

          nodata ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="This role not have permission" /> :
            props.data.permissions.map((permission) => (
              <Permission icon={<DeleteOutlined onClick={() => {
                if (permission.id)
                  detach({
                    roleId: props.data.id,
                    permissionId: +permission.id
                  })
              }} />} data={permission} />
            ))}
      </Space>
    </Card>
  );
};
