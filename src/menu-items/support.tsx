// assets
import { DocumentCode2, Driving, I24Support, InfoCircle, Level, OceanProtocol, ShieldCross } from 'iconsax-react';

// type
import { NavItemType } from 'types/menu';

// icons
const icons = {
  samplePage: DocumentCode2,
  menuLevel: OceanProtocol,
  menuLevelSubtitle: Level,
  disabledMenu: ShieldCross,
  chipMenu: InfoCircle,
  documentation: I24Support,
  roadmap: Driving
};

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const support: NavItemType = {
  id: 'other',
  title: 'others',
  type: 'group',
  children: [
    {
      id: 'sample-page',
      title: 'sample-page',
      type: 'item',
      url: '/sample-page',
      icon: icons.samplePage
    },
    {
      id: 'menu-level',
      title: 'menu-level',
      type: 'collapse',
      icon: icons.menuLevel,
      children: [
        {
          id: 'menu-level-1.1',
          title: 'level',
          type: 'item',
          url: '#'
        },
        {
          id: 'menu-level-1.2',
          title: 'level',
          type: 'collapse',
          children: [
            {
              id: 'menu-level-2.1',
              title: 'level 2',
              type: 'item',
              url: '#'
            },
            {
              id: 'menu-level-2.2',
              title: 'level 2.2',
              type: 'collapse',
              children: [
                {
                  id: 'menu-level-3.1',
                  title: 'level 3.1',
                  type: 'item',
                  url: '#'
                },
                {
                  id: 'menu-level-3.2',
                  title: 'level 3.2',
                  type: 'item',
                  url: '#'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 'menu-level-subtitle',
      title: 'menu-level-subtitle',
      caption: 'menu-level-subtitle-caption',
      type: 'collapse',
      icon: icons.menuLevelSubtitle,
      children: [
        {
          id: 'sub-menu-level-1.1',
          title: 'level',
          caption: 'menu-level-subtitle-item',
          type: 'item',
          url: '#'
        },
        {
          id: 'sub-menu-level-1.2',
          title: 'level',
          caption: 'menu-level-subtitle-collapse',
          type: 'collapse',
          children: [
            {
              id: 'sub-menu-level-2.1',
              title: 'level',
              caption: 'menu-level-subtitle-sub-item',
              type: 'item',
              url: '#'
            }
          ]
        }
      ]
    },
    {
      id: 'disabled-menu',
      title: 'disabled-menu',
      type: 'item',
      url: '#',
      icon: icons.disabledMenu,
      disabled: true
    },
    {
      id: 'oval-chip-menu',
      title: 'oval-chip-menu',
      type: 'item',
      url: '#',
      icon: icons.chipMenu,
      chip: {
        label: 'Fire',
        color: 'error',
        variant: 'outlined',
        size: 'small'
      }
    },
    {
      id: 'documentation',
      title: 'documentation',
      type: 'item',
      url: 'https://phoenixcoded.gitbook.io/able-pro/v/react/',
      icon: icons.documentation,
      external: true,
      target: true,
      chip: {
        label: 'gitbook',
        color: 'info',
        size: 'small'
      }
    },
    {
      id: 'roadmap',
      title: 'roadmap',
      type: 'item',
      url: 'https://phoenixcoded.gitbook.io/able-pro/v/react/roadmap',
      icon: icons.roadmap,
      external: true,
      target: true
    }
  ]
};

export default support;
