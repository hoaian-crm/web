import { Space, Typography } from "antd";
import React, { useEffect } from "react";
import { usePermission } from "store/permissions/hook";
import { useRole } from "store/roles/hook";
import { FetchStatus } from "type/api.d";
import { PermissionDrawer } from "./components/permission_drawer";
import { Roles } from "./components/roles";

const Page = () => {
  const { fetch, fetchStatus } = useRole();
  const { fetch: fetchPermission, fetchPermissionStatus } = usePermission();
  useEffect(() => {
    if (fetchStatus === FetchStatus.NoAction)
      fetch({
        limit: "10",
      });

    if (fetchPermissionStatus === FetchStatus.NoAction)
      fetchPermission({
        limit: "1000",
      });
  }, []);

  return (
    <Space direction="vertical" style={{ padding: 10, width: "100%" }}>
      <Typography.Title level={3}>Role management</Typography.Title>
      <Roles />
      <PermissionDrawer />
    </Space>
  );
};

export default Page;
