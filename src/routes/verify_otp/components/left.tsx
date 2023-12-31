import { PrimaryButton } from "components/button";
import { PrimaryInput } from "components/input";
import { Text } from "components/text";
import styled from "styled-components";

export const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 7.5rem;
  margin: 0;
  font-family: "Smooch Sans", sans-serif;
  font-weight: 700;
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: #1c1c1c;
  margin: 0;
  font-family: "Poppins", sans-serif;
`;

export const RegisterForm = styled.form`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const RegisterInput = styled(PrimaryInput)`
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
`;

export const SubmitButton = styled(PrimaryButton)``;
export const SubmitButtonLabel = styled(Text)`
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 700;
`;

export const Register = styled.a`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  text-decoration: none;
  color: ${(props) => props.theme.primaryTextTheme.color};
  font-size: 12px;
  text-align: left;
  width: 100%;
`;
