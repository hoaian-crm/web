import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEventHandler, InputHTMLAttributes } from "react";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { InputTheme, Theme } from "theme";
import { Text } from "./text";

export type OnChange = ChangeEventHandler<HTMLInputElement>;

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  headIcon?: IconProp;
  placeHolder: string;
  validators?: Array<Function>;
  onClick?: Function;
  onClickHeaderIcon?: Function;
  onChange: OnChange;
  value?: any;
  type: string;
  name?: string;
  className?: string;
  label?: string;
};

export const Input: React.FC<InputProps> = (props) => {
  const theme = useTheme() as InputTheme;

  return (
    <>
      {
        props.label && <Label>{props.label}</Label>
      }
      <InputContainer className={props.className}>
        {props.headIcon ? (
          <ThemeProvider theme={theme.placeHolder}>
            <InputHeadIcon icon={props.headIcon}></InputHeadIcon>
          </ThemeProvider>
        ) : null}
        <ThemeProvider theme={theme.text}>
          <InputCore
            required={props.required}
            value={props.value}
            placeholder={props.placeHolder}
            name={props.name}
            {...props}
            className="input-core"
          />
        </ThemeProvider>
      </InputContainer>
    </>
  );
};

const Label = styled(Text)`
  font-size: 14px;
`

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  background-color: ${(props) => props.theme.backgroundColor};
  padding: 8px 10px;
  border-radius: 10px;
  box-sizing: border-box;
  gap: 10px;
`;

const InputCore = styled.input`
  border: none;
  outline: none;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  background: none;
  width: 100%;
  color: ${(props) => props.theme.color};
`;

const InputHeadIcon = styled(FontAwesomeIcon)`
  font-size: 18px;
  color: ${(props) => props.theme.color};
`;

export const PrimaryInput: React.FC<InputProps> = (props) => {
  const theme = useTheme() as Theme;
  return (
    <ThemeProvider theme={theme.inputTheme}>
      <Input {...props} />
    </ThemeProvider>
  );
};
