// assets
import { Story, Fatrows, PresentionChart } from 'iconsax-react';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = {
  widgets: Story,
  statistics: Story,
  data: Fatrows,
  chart: PresentionChart
};

// ==============================|| MENU ITEMS - WIDGETS ||============================== //

const widget: NavItemType = {
  id: 'group-widget',
  title: "Widgets",
  icon: icons.widgets,
  type: 'group',
  children: [
    {
      id: 'statistics',
      title: "Statistics",
      type: 'item',
      url: '/widget/statistics',
      icon: icons.statistics
    },
    {
      id: 'data',
      title: "Data",
      type: 'item',
      url: '/widget/data',
      icon: icons.data
    },
    {
      id: 'chart',
      title: "Chart",
      type: 'item',
      url: '/widget/chart',
      icon: icons.chart
    }
  ]
};

export default widget;
