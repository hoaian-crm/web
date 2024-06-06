// project-imports
import applications from './applications';

// types
import { NavItemType } from 'types/menu';
import dashboard from './dashboard';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
  items: [dashboard, applications]
};

export default menuItems;
