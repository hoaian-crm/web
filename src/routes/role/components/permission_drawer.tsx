import { Drawer, Space } from "antd";
import React from "react";
import { usePermission } from "store/permissions/hook";
import { useRole } from "store/roles/hook";
import { Permission } from "./permission";

export const PermissionDrawer = () => {
  const { selectedRole, deselect } = useRole();
  const { result: permissions } = usePermission();

  return (
    <Drawer open={!!selectedRole} onClose={deselect} title="Permissions">
      <Space
        wrap={true}
        style={{ width: "100%", height: "100%", alignContent: "flex-start" }}
      >
        {permissions.map((item) => (
          <Permission data={item} />
        ))}
      </Space>
    </Drawer>
  );
};
