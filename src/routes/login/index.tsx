import { Icons, PublicImages } from "common";
import React from "react";
import { Container } from "./components/container";
import {
  Header,
  Left,
  LoginForm,
  LoginInput,
  SubmitButton,
  SubmitButtonLabel,
  Subtitle,
  Title,
} from "./components/left";
import { CoverImage, Right } from "./components/right";
import { LightTheme } from "theme";
import { ThemeProvider } from "styled-components";

const Login: React.FC = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Container>
        <Left>
          <Header>
            <Title>Welcome</Title>
            <Subtitle>We are glad to see you back with us</Subtitle>
          </Header>

          <LoginForm className="form">
            <LoginInput
              placeHolder="Username"
              name="username"
              type="text"
              value=""
              onChange={() => {}}
              headIcon={Icons.UserIcon}
            />
            <LoginInput
              placeHolder="Password"
              name="password"
              type="password"
              value=""
              onChange={() => {}}
              headIcon={Icons.PasswordIcon}
            />
            <SubmitButton>
              <SubmitButtonLabel>Login</SubmitButtonLabel>
            </SubmitButton>
          </LoginForm>
        </Left>
        <Right className="right">
          <CoverImage src={PublicImages.LoginWallpaper} alt="" />
        </Right>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
