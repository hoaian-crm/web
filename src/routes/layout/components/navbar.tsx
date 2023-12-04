import {
  AppstoreOutlined,
  DashboardOutlined,
  LockOutlined,
  MailOutlined,
  SettingOutlined,
  SkypeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu, Typography } from "antd";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { usePlugin } from "store/plugins";
import { FetchStatus } from "type/api.d";
import { INavItem } from "type/nav_item";

export const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { fetch, getConfigured, status } = usePlugin();

  useEffect(() => {
    if (status === FetchStatus.NoAction) fetch({ limit: "100", keyword: "" });
  }, []);

  const pluginItem: Array<INavItem> = [
    {
      key: "/plugins/mails",
      icon: <MailOutlined style={{ fontSize: 24 }} />,
      label: <Typography.Title level={5}>Mails</Typography.Title>,
      name: "mail",
    },
    {
      key: "/plugins/skype",
      icon: <SkypeOutlined style={{ fontSize: 24 }} />,
      label: <Typography.Title level={5}>Skype</Typography.Title>,
      name: "mail",
    },
  ];
  const items: Array<INavItem> = [
    {
      key: "/",
      icon: <DashboardOutlined style={{ fontSize: 24 }} />,
      label: <Typography.Title level={5}>Dashboard</Typography.Title>,
    },
    {
      key: "/users",
      icon: <UserOutlined style={{ fontSize: 24 }} />,
      label: <Typography.Title level={5}>User</Typography.Title>,
    },
    {
      key: "/roles",
      icon: <LockOutlined style={{ fontSize: 24 }} />,
      label: <Typography.Title level={5}>Role</Typography.Title>,
    },
    {
      key: "/plugins",
      icon: <AppstoreOutlined style={{ fontSize: 24 }} />,
      label: <Typography.Title level={5}>Plugins</Typography.Title>,
      children:
        status === FetchStatus.NoAction
          ? [
              {
                key: "/plugins/settings",
                icon: <SettingOutlined style={{ fontSize: 24 }} />,
                label: <Typography.Title level={5}>Settings</Typography.Title>,
              },
            ]
          : [
              {
                key: "/plugins/settings",
                icon: <SettingOutlined style={{ fontSize: 24 }} />,
                label: <Typography.Title level={5}>Settings</Typography.Title>,
              },
              ...pluginItem.filter((item) => !!getConfigured(item.name || "")),
            ],
    },
  ];

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      style={{ alignItems: "center" }}
      items={items}
      onClick={(e) => navigate(e.key)}
      selectedKeys={[pathname]}
    />
  );
};
