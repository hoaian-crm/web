import { Input, Row, Space, Typography } from "antd";
import React, { useEffect } from "react";
import { usePermission } from "store/permissions/hook";
import { useRole } from "store/roles/hook";
import { FetchStatus } from "type/FetchStatus";
import { CreateRole } from "./components/create_role";
import { PermissionDrawer } from "./components/permission_drawer";
import { Roles } from "./components/roles";

const Page = () => {
  const { fetch, fetchStatus, query, setQuery } = useRole();
  const { fetch: fetchPermission, fetchPermissionStatus } = usePermission();
  useEffect(() => {
    fetch(query);
  }, [query]);

  useEffect(() => {
    if (fetchPermissionStatus === FetchStatus.NoAction)
      fetchPermission({
        limit: "1000",
      });
  }, [])

  return (
    <Space direction="vertical" style={{ padding: 10, width: "100%" }}>
      <Typography.Title level={3}>Role management</Typography.Title>
      <Row style={{ "alignItems": "center" }}>
        <CreateRole />
        <Input.Search type="primary" style={{ maxWidth: 300, marginLeft: 20 }} placeholder="Search role" onSearch={(e) => setQuery({ ...query, keyword: e })} size="large" />
      </Row>
      <Roles />
      <PermissionDrawer />
    </Space>
  );
};

export default Page;
