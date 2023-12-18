import {
  DeleteOutlined,
  EditOutlined,
  SettingOutlined
} from "@ant-design/icons";
import { Card, Empty, Flex, Popconfirm, Space, Typography } from "antd";
import React from "react";
import { useRole } from "store/roles/hook";
import { IRole } from "type/role";
import { Permission } from "./permission";

type Props = {
  data: IRole;
};

export const Role: React.FC<Props> = (props) => {
  const { select, detach, remove } = useRole();

  const nodata = props.data.permissions?.length === 0

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
        <Popconfirm title={`Are you sure delete ${props.data.name} role`} onConfirm={() => { remove({ id: props.data.id }) }} placement="bottom">
          <DeleteOutlined key="ellipsis" />
        </Popconfirm>
      ]}
      title={
        <Flex vertical >
          <Typography.Title level={5}>{props.data.name}</Typography.Title>
          <Typography.Text type="secondary">{props.data.description}</Typography.Text>
        </Flex>
      }
      headStyle={{ padding: 10 }}
      bodyStyle={{
        padding: 10,
        width: '100%'
      }}
      style={{ width: "100%", marginTop: 10 }}
    >
      <Space wrap style={{ width: '100%', justifyContent: nodata ? 'center' : 'left' }}>
        {

          nodata ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="This role not have permission" /> :
            props.data.permissions?.map((permission) => (
              <Permission icon={<DeleteOutlined onClick={() => {
                if (permission.id && props)
                  detach({
                    roleId: props.data.id!,
                    permissionId: +permission.id
                  })
              }} />} data={permission} />
            ))}
      </Space>
    </Card>
  );
};
