import { PublicImages } from "common";
import React from "react";

import styled from "styled-components";
export type LogoProps = {
  title: string;
};

export const Logo: React.FC<LogoProps> = ({ title = "Dashboard" }) => {
  return (
    <LogoContainer>
      <LogoImage src={PublicImages.MainLogo}></LogoImage>
      <LogoTitle>{title}</LogoTitle>
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
`;

const LogoImage = styled.img``;

const LogoTitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 26px;
  color: ${(props) => props.theme.primaryTextColor};
  font-weight: 600;
`;
