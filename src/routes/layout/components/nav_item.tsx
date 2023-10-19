import React from "react";
import styled from "styled-components";

export type NavItemProps = {
  icon: string;
  name: string;
  href: string;
  isActive: boolean;
};

export const NavItem: React.FC<NavItemProps> = (props) => {
  return <NavItemContainer>
    <Icon src={props.icon} />
  </NavItemContainer>;
};

export const NavItemContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  display: flex;
  padding: 10px 5px;
  
`;

const Icon = styled.img`
  border-radius: 10px;
  width: 14px;
  height: 14px;
`;
