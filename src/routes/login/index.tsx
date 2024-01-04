import { Icons, PublicImages } from "common";
import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { LoginBody } from "service/auth";
import { useAppDispatch, useAppSelector } from "store";
import { login } from "store/auth/actions";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "theme";
import { FetchStatus } from "type/FetchStatus";
import { Container } from "./components/container";
import {
    Header,
    Left,
    LoginForm,
    LoginInput,
    Register,
    SubmitButton,
    SubmitButtonLabel,
    Subtitle,
    Title,
} from "./components/left";
import { CoverImage, Right } from "./components/right";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const isAuthenticated = useLoaderData();
  const [input, setInput] = useState<LoginBody>({
    email: "",
    password: "",
  });
  const { status, getProfileStatus } = useAppSelector(
    (state) => state.authReducer
  );

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

  useEffect(() => {
    if (status === FetchStatus.Failed) {
      setInput({
        ...input,
        password: "",
      });
    }
    if (status === FetchStatus.Success) {
      window.location.href = "/"
    }
  }, [status]); // Refresh password input after login failed

  if (isAuthenticated) return null;

  return (
    <ThemeProvider theme={LightTheme}>
      <Container>
        <Left>
          <Header>
            <Title>Welcome</Title>
            <Subtitle>We are glad to see you back with us</Subtitle>
          </Header>

          <LoginForm onSubmit={onSubmit}>
            <LoginInput
              placeHolder="Email address"
              name="email"
              type="email"
              onChange={onChange}
              headIcon={Icons.UserIcon}
              value={input.email}
              required
            />
            <LoginInput
              placeHolder="Password"
              name="password"
              type="password"
              onChange={onChange}
              headIcon={Icons.PasswordIcon}
              value={input.password}
              minLength={8}
              required
            />
            <Register href="/register">
              If you don't have account,{" "}
              <span style={{ color: "blue" }}>register now</span>
            </Register>
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
