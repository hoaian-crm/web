import { Icons, PublicImages } from "common";
import React, { useState } from "react";
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
import { LoginBody } from "service/auth";
import { useAppDispatch } from "store";
import { login } from "store/auth/actions";

const Login: React.FC = () => {
  const [input, setInput] = useState<LoginBody>({
    username: "",
    password: "",
  });

  const dispatch = useAppDispatch();

  const onChange = (e: any) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch(login(input));
  };

  return (
    <ThemeProvider theme={LightTheme}>
      <Container>
        <Left>
          <Header>
            <Title>Welcome</Title>
            <Subtitle>We are glad to see you back with us</Subtitle>
          </Header>

          <LoginForm className="form" onSubmit={onSubmit}>
            <LoginInput
              placeHolder="Username"
              name="username"
              type="text"
              onChange={onChange}
              headIcon={Icons.UserIcon}
              value={input.username}
            />
            <LoginInput
              placeHolder="Password"
              name="password"
              type="password"
              onChange={onChange}
              headIcon={Icons.PasswordIcon}
              value={input.password}
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
