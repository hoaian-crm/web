import { PlusCircleFilled } from "@ant-design/icons";
import { Drawer, Space } from "antd";
import React from "react";
import { usePermission } from "store/permissions/hook";
import { useRole } from "store/roles/hook";
import { Permission } from "./permission";

export const PermissionDrawer = () => {
  const { selectedRole, deselect, attach, isHavePermission } = useRole();
  const { result: permissions } = usePermission();

  return (
    <Drawer open={!!selectedRole} onClose={deselect} title="Permissions">
      <Space
        wrap={true}
        style={{ width: "100%", height: "100%", alignContent: "flex-start" }}
      >
        {permissions.map((item) => !isHavePermission(selectedRole, item) ? (
          <Permission data={item} icon={<PlusCircleFilled onClick={() => {
            if (item.id && selectedRole)
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
