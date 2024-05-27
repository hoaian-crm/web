// project-imports
import { NavItemType } from 'types/menu';

// ==============================|| MENU ITEMS - COMPONENTS ||============================== //

const menuItems: NavItemType[] = [
  {
    id: 'group-inputs',
    title: "Inputs",
    type: 'group',
    children: [
      {
        id: 'autocomplete',
        search: 'autocomplete, combo box, country select, grouped, multi select',
        title: "Auto complete",
        type: 'item',
        url: '/components-overview/autocomplete'
      },
      {
        id: 'buttons',
        search: 'buttons, button group, icon button, toggle button, loading button',
        title: "Button",
        type: 'item',
        url: '/components-overview/buttons'
      },
      {
        id: 'checkbox',
        search: 'checkbox, indeterminate',
        title: "Checkbox",
        type: 'item',
        url: '/components-overview/checkbox'
      },
      {
        id: 'radio',
        search: 'radio',
        title: "Radio",
        type: 'item',
        url: '/components-overview/radio'
      },
      {
        id: 'rating',
        search: 'rating, star rating, feedback',
        title: "Rating",
        type: 'item',
        url: '/components-overview/rating'
      },
      {
        id: 'switch',
        search: 'switch',
        title: "Switch",
        type: 'item',
        url: '/components-overview/switch'
      },
      {
        id: 'select',
        search: 'select, multi-select',
        title: "Select",
        type: 'item',
        url: '/components-overview/select'
      },
      {
        id: 'slider',
        search: 'slider, range',
        title: "Slider",
        type: 'item',
        url: '/components-overview/slider'
      },
      {
        id: 'textfield',
        search: 'textfield, input, form input, search',
        title: "Text Field",
        type: 'item',
        url: '/components-overview/textfield'
      }
    ]
  },
  {
    id: 'data-display',
    title: "Data display",
    type: 'group',
    children: [
      {
        id: 'avatars',
        search: 'avatars, fallbacks, group avatar',
        title: "Avatar",
        type: 'item',
        url: '/components-overview/avatars'
      },
      {
        id: 'badges',
        search: 'badges',
        title: "Badges",
        type: 'item',
        url: '/components-overview/badges'
      },
      {
        id: 'chips',
        search: 'chips, tags, ',
        title: "Chips",
        type: 'item',
        url: '/components-overview/chips'
      },
      {
        id: 'lists',
        search: 'lists, folder list, nested list',
        title: "List",
        type: 'item',
        url: '/components-overview/lists'
      },
      {
        id: 'tooltip',
        search: 'tooltip',
        title: "Tooltips",
        type: 'item',
        url: '/components-overview/tooltip'
      },
      {
        id: 'typography',
        search: 'typography, h1, h2,h3, h4, h5, h6, caption, subtitle, body',
        title: "Typography",
        type: 'item',
        url: '/components-overview/typography'
      }
    ]
  },
  {
    id: 'feedback',
    title: "Feedback",
    type: 'group',
    children: [
      {
        id: 'alert',
        search: 'alert',
        title: "Alert",
        type: 'item',
        url: '/components-overview/alert'
      },
      {
        id: 'dialogs',
        search: 'dialogs, modal, sweetalert, confirmation box',
        title: "Dialogs",
        type: 'item',
        url: '/components-overview/dialogs'
      },
      {
        id: 'progress',
        search: 'progress, circular, linear, buffer',
        title: "Progress",
        type: 'item',
        url: '/components-overview/progress'
      },
      {
        id: 'snackbar',
        search: 'snackbar, notification, notify',
        title: "Snackbar",
        type: 'item',
        url: '/components-overview/snackbar'
      }
    ]
  },
  {
    id: 'navigation',
    title: "Navigation",
    type: 'group',
    children: [
      {
        id: 'breadcrumbs',
        search: 'breadcrumbs',
        title: "Breadcrmbs",
        type: 'item',
        url: '/components-overview/breadcrumbs'
      },
      {
        id: 'pagination',
        search: 'pagination, table pagination',
        title: "Pagination",
        type: 'item',
        url: '/components-overview/pagination'
      },
      {
        id: 'speeddial',
        search: 'speeddial, speed dial, quick access button, fab button',
        title: "Speed dial",
        type: 'item',
        url: '/components-overview/speeddial'
      },
      {
        id: 'stepper',
        search: 'stepper, form wizard, vertical stepper, vertical wizard',
        title: "Stepper",
        type: 'item',
        url: '/components-overview/stepper'
      },
      {
        id: 'tabs',
        search: 'tabs, vertical tab',
        title: "Tabs",
        type: 'item',
        url: '/components-overview/tabs'
      }
    ]
  },
  {
    id: 'surfaces',
    title: "Surfaces",
    type: 'group',
    children: [
      {
        id: 'accordion',
        search: 'accordion',
        title: "Accordion",
        type: 'item',
        url: '/components-overview/accordion'
      },
      {
        id: 'cards',
        search: 'cards',
        title: "Cards",
        type: 'item',
        url: '/components-overview/cards'
      }
    ]
  },
  {
    id: 'utils',
    title: "Utils",
    type: 'group',
    children: [
      {
        id: 'color',
        search: 'color',
        title: "Color",
        type: 'item',
        url: '/components-overview/color'
      },
      {
        id: 'date-time-picker',
        search: 'datetime, date, time date time, picker, date range picker',
        title: "Date time",
        type: 'item',
        url: '/components-overview/date-time-picker'
      },
      {
        id: 'modal',
        search: 'modal, dialog',
        title: "Modal",
        type: 'item',
        url: '/components-overview/modal'
      },
      {
        id: 'shadows',
        search: 'shadows, color shadow',
        title: "Shadow",
        type: 'item',
        url: '/components-overview/shadows'
      },
      {
        id: 'timeline',
        search: 'timeline, list of event',
        title: "Timeline",
        type: 'item',
        url: '/components-overview/timeline'
      },
      {
        id: 'treeview',
        search: 'treeview, email clone',
        title: "Tree view",
        type: 'item',
        url: '/components-overview/treeview'
      }
    ]
  }
];

export default menuItems;
