import React, { EventHandler, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import {
  Header,
  Left,
  RegisterForm,
  RegisterInput,
  SubmitButton,
  SubmitButtonLabel,
  Subtitle,
  Title,
} from "./components/left";
import { CoverImage, Right } from "./components/right";
import { Icons, PublicImages } from "common";
import { OnChange } from "components/input";
import { LightTheme } from "theme";
import { useAppDispatch } from "store";
import { register } from "store/auth/actions";

export const Register = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    displayName: "",
    reTypePassword: "",
  });

  const dispatch = useAppDispatch();

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (e.password !== e.reTypePassword) return;
    dispatch(register(input));
  };

  const onChange: OnChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <ThemeProvider theme={LightTheme}>
      <Container>
        <Left>
          <Header>
            <Title>Welcome</Title>
            <Subtitle>We are glad to see you back with us</Subtitle>
          </Header>

          <RegisterForm onSubmit={onSubmit}>
            <RegisterInput
              placeHolder="Email address"
              name="email"
              type="email"
              onChange={onChange}
              headIcon={Icons.UserIcon}
              value={input.email}
              required
            />
            <RegisterInput
              placeHolder="Display Name"
              name="displayName"
              type="text"
              onChange={onChange}
              headIcon={Icons.NameIcon}
              value={input.displayName}
              minLength={10}
              required
            />
            <RegisterInput
              placeHolder="Password"
              name="password"
              type="password"
              onChange={onChange}
              headIcon={Icons.PasswordIcon}
              value={input.password}
              minLength={8}
              required
            />
            <RegisterInput
              placeHolder="Re-Enter password"
              name="reTypePassword"
              type="password"
              onChange={onChange}
              headIcon={Icons.PasswordIcon}
              value={input.reTypePassword}
              minLength={8}
              required
            />
            <SubmitButton disabled={input.password !== input.reTypePassword}>
              <SubmitButtonLabel>Register</SubmitButtonLabel>
            </SubmitButton>
          </RegisterForm>
        </Left>
        <Right className="right">
          <CoverImage src={PublicImages.LoginWallpaper} alt="" />
        </Right>
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  display: flex;
`;
