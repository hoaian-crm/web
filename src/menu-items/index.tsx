// project-imports
import applications from './applications';
import widget from './widget';
import formsTables from './forms-tables';
import chartsMap from './charts-map';
import support from './support';
import pages from './pages';

// types
import { NavItemType } from 'types/menu';
import dashboard from './dashboard';

// ==============================|| MENU ITEMS ||============================== //

const menuItems: { items: NavItemType[] } = {
  items: [dashboard, widget, applications, formsTables, chartsMap, pages, support]
};

export default menuItems;
