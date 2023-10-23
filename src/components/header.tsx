// Page header
import React from "react";
import styled, { useTheme } from "styled-components";
import { Text } from "./text";
import { Input, PrimaryInput } from "./input";
import { Icons } from "common";

export type HeaderProps = {
  title: string;
};

export const Header: React.FC<HeaderProps> = (props) => {

  return (
    <Container>
      <Title>{props.title}</Title>
      <PrimaryInput onChange={() => {}} placeHolder="Search features" type="text" headIcon={Icons.SearchIcon}/>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled(Text)`
  font-size: 24px;
  font-weight: 500;
`;
