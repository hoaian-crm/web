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
import { activeUser } from "store/auth/actions";

export const VerifyOtp = () => {
  const [input, setInput] = useState({
    email: "",
    otp_code: "",
  });

  const dispatch = useAppDispatch();

  const onSubmit = (e: any) => {
    e.preventDefault();
    dispatch(activeUser(input));
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
              placeHolder="Otp code"
              name="otp_code"
              type="text"
              onChange={onChange}
              headIcon={Icons.NameIcon}
              value={input.otp_code}
              minLength={8}
              maxLength={8}
              required
            />
            <SubmitButton>
              <SubmitButtonLabel>Verify</SubmitButtonLabel>
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
