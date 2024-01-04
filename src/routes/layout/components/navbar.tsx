import {
    AppstoreOutlined,
    ContactsOutlined,
    DashboardOutlined,
    LockOutlined,
    MailOutlined,
    SettingOutlined,
    SkypeOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { usePlugin } from "store/plugins";
import { FetchStatus } from "type/FetchStatus";
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
      label: "Mails",
      name: "mail",
    },
    {
      key: "/plugins/skype",
      icon: <SkypeOutlined style={{ fontSize: 24 }} />,
      label: "Skype",
      name: "skype",
    },
  ];
  const items: Array<INavItem> = [
    {
      key: "/",
      icon: <DashboardOutlined style={{ fontSize: 24 }} />,
      label: "Dashboard",
    },
    {
      key: "/users",
      icon: <UserOutlined style={{ fontSize: 24 }} />,
      label: "User",
    },
    {
      key: "/roles",
      icon: <LockOutlined style={{ fontSize: 24 }} />,
      label: "Role",
    },
    {
      key: "/customers",
      icon: <ContactsOutlined style={{ fontSize: 24 }} />,
      label: "Customer",
    },
    {
      key: "/plugins",
      icon: <AppstoreOutlined style={{ fontSize: 24 }} />,
      label: "Plugins",
      children:
        status === FetchStatus.NoAction
          ? [
            {
              key: "/plugins/settings",
              icon: <SettingOutlined style={{ fontSize: 24 }} />,
              label: "Settings",
            },
          ]
          : [
            {
              key: "/plugins/settings",
              icon: <SettingOutlined style={{ fontSize: 24 }} />,
              label: "Settings",
            },
            ...pluginItem.filter((item) => !!getConfigured(item.name || "")),
          ],
    },
  ];

  return (
    <Menu
      mode="inline"
      style={{ alignItems: "center" }}
      items={items}
      onClick={(e) => navigate(e.key)}
      selectedKeys={[pathname]}
    />
  );
};
