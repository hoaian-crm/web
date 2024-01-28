import { Menu, MenuProps } from 'antd';
import { ItemType, SubMenuType } from 'antd/es/menu/hooks/useItems';
import React, { Key, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { INavItem } from 'type/nav_item';

type Props = MenuProps;

const MyMenu: React.FC<Props> = (props) => {
  const { pathname } = useLocation();
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const renderItems = (items: Array<ItemType> | undefined = []): {
    items: Array<ItemType>,
    activeChild: boolean
  } => {
    let activeChild = false;
    return {
      items: items.map(item => {
        const result = renderItem(item);
        activeChild = activeChild || result.activeChild;
        return result.item;
      }),
      activeChild
    };
  }

  const renderItem = (item: ItemType): { item: ItemType, activeChild: boolean } => {
    let haveActiveChild = false;
    if ((item as SubMenuType).children) {
      const { items: children, activeChild } = renderItems((item as SubMenuType).children);
      (item as SubMenuType).children = children;
      haveActiveChild = activeChild || haveActiveChild;
    }

    item!.style = Object.assign({}, item?.style, { fontWeight: 500 });
    if (haveActiveChild) {
      item!.className = "sub-menu-expanded"
      setOpenKeys([...openKeys, item!.key!.toString()]);
    }
    if (props.selectedKeys?.includes(item!.key!.toString())) {
      haveActiveChild = true;
    }

    return {
      item, activeChild: haveActiveChild
    };
  };

  const { items } = useMemo(() => renderItems(props.items), []);

  return <Menu {...props} items={items} defaultOpenKeys={openKeys}></Menu>
}

export default MyMenu
