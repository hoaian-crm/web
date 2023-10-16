import React from "react";
import styled from "styled-components";
import { TextTheme } from "theme";

export type TextProps = {
  className?: string;
  children?: React.ReactNode;
};

export const Text: React.FC<TextProps> = (props) => {
  return <TextStyle className={props.className}>{props.children}</TextStyle>;
};

const TextStyle = styled.p<{ theme: TextTheme }>`
  color: ${(props) => props.theme.color};
`;
