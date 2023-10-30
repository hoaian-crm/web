import { Text } from "components/text";
import React, { MouseEventHandler } from "react";
import styled, { useTheme } from "styled-components";
import { IUser } from "type/user";

type Props = {
  data: IUser;
  onClick?: MouseEventHandler;
};

export const UserRow: React.FC<Props> = (props) => {
  return (
    <Container onMouseDown={props.onClick}>
      <Avatar src={props.data.avatar} />
      <Column>
        <Name limit={15}>{props.data.displayName}</Name>
        <Email>{props.data.email}</Email>
      </Column>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
      rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  }
  scrollbar-width: none;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
`;

const Name = styled(Text)``;
const Email = styled(Text)`
  color: ${(props) => props.theme.placeHolder};
  font-size: 12px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
