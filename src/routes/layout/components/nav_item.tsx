import React from "react";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { INavItem } from "type/nav_item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export type NavItemProps = {
  isActive: boolean;
} & INavItem;

export const NavItem: React.FC<NavItemProps> = (props) => {
  const theme = useTheme();

  return (
    <ThemeProvider
      theme={
        props.isActive
          ? theme.navbarTheme.activeItemTheme
          : theme.navbarTheme.defaultItemTheme
      }
    >
      <NavItemContainer to={props.href}>
        <Icon icon={props.icon} />
        <Name>{props.name}</Name>
      </NavItemContainer>
    </ThemeProvider>
  );
};

export const NavItemContainer = styled(Link)`
  width: 100%;
  border-radius: 10px;
  display: flex;
  background-color: ${(props) => props.theme.backgroundColor};
  justify-content: start;
  gap: 10px;
  align-items: center;
  padding: 0 10px;
  :hover {
    cursor: pointer;
  }
  text-decoration: none;
`;

const Icon = styled(FontAwesomeIcon)`
  border-radius: 10px;
  width: 24px;
  height: 24px;
  color: ${(props) => props.theme.contentColor};
`;

const Name = styled.p`
  font-size: 14px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  color: ${(props) => props.theme.contentColor};
`;
