import React from "react";
import { NavItem, NavItemProps } from "./nav_item";
import { INavItem } from "type/nav_item";
import styled from "styled-components";
import { Logo } from "./logo";
import { useLocation } from "react-router-dom";
import { Icons } from "common";
import { Profile } from "./profile";

const navItems: Array<INavItem> = [
  {
    href: "/",
    name: "Dashboard",
    icon: Icons.DashBoardIcon,
  },
  {
    href: "/users",
    name: "Users",
    icon: Icons.ProfileIcon,
  },
  {
    href: "/product",
    name: "Products",
    icon: Icons.ProductIcon,
  },
  {
    href: "/income",
    name: "Income",
    icon: Icons.IncomeIcon,
  },
  {
    href: "/plugin",
    name: "Plugin",
    icon: Icons.PluginIcon,
  },
];

export const Navbar = () => {
  const location = useLocation();
  const getRouteName = () => {
    const route = navItems.find((value) => value.href === location.pathname);
    if (!route) return "";
    return route.name;
  };

  return (
    <NavbarContainer>
      <Logo title={getRouteName()} />
      {navItems.map((navItem, index) => (
        <NavItem {...navItem} isActive={navItem.href === location.pathname} key={index} />
      ))}
      <Profile />
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.navbarTheme.backgroundColor};
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
