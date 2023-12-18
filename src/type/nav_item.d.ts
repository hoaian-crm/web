import { MenuItemType, SubMenuType } from "antd/es/menu/hooks/useItems";

export type FNavItem = {
  key: string;
  label: React.ReactNode;
  icon: React.ReactNode;
  children?: Array<INavItem>;
  name?: string;
};

export type INavItem = FNavItem & (MenuItemType | SubMenuType);