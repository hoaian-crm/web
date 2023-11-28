import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type INavItem = {
  key: string;
  label: React.ReactNode;
  icon: React.ReactNode;
  children?: Array<INavItem>;
  name?: string;
};
