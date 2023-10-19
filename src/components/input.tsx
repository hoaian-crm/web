import React, {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
} from "react";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { InputTheme, Theme } from "theme";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  headIcon?: string;
  placeHolder: string;
  validators?: Array<Function>;
  onClick?: Function;
  onClickHeaderIcon?: Function;
  onChange: ChangeEventHandler;
  value?: any;
  type: string;
  name?: string;
  className?: string;
};

export const Input: React.FC<InputProps> = (props) => {
  const theme = useTheme() as InputTheme;

  return (
    <InputContainer className={props.className}>
      <InputHeadIcon src={props.headIcon} className="head_icon"></InputHeadIcon>
      <ThemeProvider theme={theme.text}>
        <InputCore
          required={props.required}
          type={props.type}
          value={props.value}
          placeholder={props.placeHolder}
          name={props.name}
          onChange={props.onChange}
        />
      </ThemeProvider>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  background-color: ${(props) => props.theme.backgroundColor};
  padding: 8px 10px;
  border-radius: 10px;
  box-sizing: border-box;
`;

const InputCore = styled.input`
  border: none;
  outline: none;
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  margin-left: 10px;
  background: none;
  color: ${(props) => props.theme.color};
  width: 100%;
`;

const InputHeadIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const PrimaryInput: React.FC<InputProps> = (props) => {
  const theme = useTheme() as Theme;
  return (
    <ThemeProvider theme={theme.inputTheme}>
      <Input {...props} />
    </ThemeProvider>
  );
};
