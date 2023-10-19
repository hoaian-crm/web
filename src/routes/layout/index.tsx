import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { LightTheme } from "theme";

export type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <ThemeProvider theme={LightTheme}>
      <LayoutContainer>
        {props.children}
        </LayoutContainer>
    </ThemeProvider>
  );
};

export const LayoutContainer = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;
