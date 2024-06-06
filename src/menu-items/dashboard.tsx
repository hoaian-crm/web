// type
import { NavItemType } from 'types/menu';
import i18n from 'i18next';

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //
//

const dashboard: NavItemType = {
  id: 'group-dashboard',
  title: i18n.t("DASHBOARD"),
  // icon: icons.,
  type: 'group',
  children: [
    {
      id: 'default',
      title: i18n.t("Overview"),
      type: 'item',
      url: '/dashboard/default',
    },
    {
      id: 'analytics',
      title: i18n.t("Analytics"),
      type: 'item',
      url: '/dashboard/analytics',
    },
  ]
};

export default dashboard;
