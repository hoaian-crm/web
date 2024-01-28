import {
  AppstoreOutlined,
  ContactsOutlined,
  DashboardOutlined,
  LockOutlined,
  MailOutlined,
  SettingOutlined,
  ShopFilled,
  SkypeOutlined,
  TagOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { theme } from "antd";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { usePlugin } from "store/plugins";
import { FetchStatus } from "type/FetchStatus";
import { INavItem } from "type/nav_item";
import Menu from 'components/menu';

export const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { fetch, getConfigured, status } = usePlugin();
  const { token } = theme.useToken();

  useEffect(() => {
    if (status === FetchStatus.NoAction) fetch({ limit: "100", keyword: "" });
  }, []);

  const pluginItem: Array<INavItem> = [
    {
      key: "/plugins/mails",
      icon: <MailOutlined style={{ fontSize: token.size }} />,
      label: "Mails",
      name: "mail",
    },
    {
      key: "/plugins/skype",
      icon: <SkypeOutlined />,
      label: "Skype",
      name: "skype",
    },
  ];
  const items: Array<INavItem> = [
    {
      key: "/",
      icon: <DashboardOutlined />,
      label: "Dashboard",
    },
    {
      key: "/users",
      icon: <UserOutlined />,
      label: "User",
    },
    {
      key: "/roles",
      icon: <LockOutlined />,
      label: "Role",
    },
    {
      key: "/customers",
      icon: <ContactsOutlined />,
      label: "Customer",
    },
    {
      key: "/products",
      icon: <ShopFilled />,
      label: "Product"
    },
    {
      key: "/tags",
      icon: <TagOutlined />,
      label: "Tags"
    },
    {
      key: "/plugins",
      icon: <AppstoreOutlined />,
      label: "Plugins",
      children:
        status === FetchStatus.NoAction
          ? [
            {
              key: "/plugins/settings",
              icon: <SettingOutlined />,
              label: "Settings",
            },
          ]
          : [
            {
              key: "/plugins/settings",
              icon: <SettingOutlined />,
              label: "Settings",
            },
            ...pluginItem.filter((item) => !!getConfigured(item.name || "")),
          ],
    },
  ];

  return (
    <Menu
      mode="inline"
      style={{ alignItems: "center", border: 'none' }}
      items={items}
      onClick={(e) => navigate(e.key)}
      selectedKeys={[pathname]}
    />
  );
};
