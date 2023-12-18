import { PlusCircleFilled } from "@ant-design/icons";
import { Button, Drawer, Form, Input, Space } from "antd";
import React, { useEffect, useState } from "react";
import { usePermission } from "store/permissions/hook";
import { useRole } from "store/roles/hook";
import { IRole } from "type/role";
import { Permission } from "./permission";

export const PermissionDrawer = () => {
  const { selectedRole, deselect, attach, isHavePermission, update } = useRole();
  const { result: permissions } = usePermission();
  const [input, setInput] = useState<IRole | undefined>(selectedRole)
  const [form] = Form.useForm()

  useEffect(() => {
    setInput(selectedRole)
    form.setFieldsValue(selectedRole)
  }, [selectedRole])

  const onSubmit = async () => {
    console.log(input)
    await update(input!)
    deselect();
  }

  return (
    <Drawer open={!!selectedRole} onClose={deselect} title={`Update ${selectedRole?.name}`}>
      <Form onValuesChange={(_, values) => { setInput({ ...input, ...values }) }} form={form} layout="vertical" style={{ marginBottom: 20 }}>
        <Form.Item label="Role name" name="name" key="name">
          <Input />
        </Form.Item>
        <Form.Item label="Role description" name="description" key="description">
          <Input />
        </Form.Item>
        <Button type="primary" style={{ width: "100%" }} onClick={onSubmit}>Save</Button>
      </Form>
      <Space
        wrap={true}
        style={{ width: "100%", alignContent: "flex-start" }}
      >
        {permissions.map((item) => !isHavePermission(selectedRole, item) ? (
          <Permission data={item} icon={<PlusCircleFilled onClick={() => {
            if (item.id && selectedRole && selectedRole.id)
              attach({
                roleId: selectedRole.id,
                permissions: [+item.id]
              })
          }} />} />
        ) : null)}
      </Space>
    </Drawer>
  );
};
