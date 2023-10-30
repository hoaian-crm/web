import React from "react";
import styled from "styled-components";
import { TextTheme } from "theme";

export type TextProps = {
  className?: string;
  children?: string | React.ReactNode;
  limit?: number;
};

export const Text: React.FC<TextProps> = (props) => {
  const textLimit = (text: string = "") => {
    if (props.limit && text.length > props.limit) {
      text = text.substring(0, props.limit - 3) + "...";
    }
    return text;
  };

  return (
    <TextStyle className={props.className}>
      {textLimit(props.children?.toString())}
    </TextStyle>
  );
};

const TextStyle = styled.p<{ theme: TextTheme }>`
  color: ${(props) => props.theme.color || props.theme.primaryTextColor};
  margin: 0;
  font-family: "Poppins", sans-serif;
`;
