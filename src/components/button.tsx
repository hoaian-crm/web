import { ThemeProps } from "common/type";
import React, { ButtonHTMLAttributes } from "react";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { ButtonTheme, Theme } from "theme";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {};

export const Button: React.FC<ButtonProps> = (props) => {
  const theme = useTheme() as ButtonTheme;
  return (
    <ThemeProvider theme={theme}>
      <ButtonContainer className={props.className}>
        <ThemeProvider theme={theme.childrenTheme}>
          <ButtonCore onClick={props.onClick}>{props.children}</ButtonCore>
        </ThemeProvider>
      </ButtonContainer>
    </ThemeProvider>
  );
};

const ButtonContainer = styled.div<ThemeProps<ButtonTheme>>`
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  margin: 0px;
  background-color: ${(props) => props.theme.backgroundColor};
  box-sizing: border-box;

  :hover {
    cursor: pointer;
  }
`;

const ButtonCore = styled.button`
  width: 100%;
  background: none;
  border: none;
`;

export const PrimaryButton: React.FC<ButtonProps> = (props) => {
  const theme = useTheme() as Theme;
  return (
    <ThemeProvider theme={theme.primaryButton}>
      <Button {...props} />
    </ThemeProvider>
  );
};
