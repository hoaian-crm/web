import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icons } from "common";
import { Text } from "components/text";
import React from "react";
import { useAppDispatch } from "store";
import { setDragToRole } from "store/roles";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { WidgetTheme } from "theme";
import { IRole } from "type/role";

export type RoleProps = {
  data: IRole;
};

export const Role: React.FC<RoleProps> = (props) => {
  const theme = useTheme() as WidgetTheme;
  const dispatch = useAppDispatch();
  return (
    <Container
      onDragEnter={() => {
        dispatch(setDragToRole(props.data.id));
      }}
    >
      <ThemeProvider theme={theme.foreground.text}>
        <Header expanded={true}>
          <div>
            <RoleName>{props.data.name}</RoleName>
            <RoleDescription>{props.data.description}</RoleDescription>
          </div>
          <Action icon={Icons.ExpandIcon} style={{ marginLeft: "auto" }} />
        </Header>
      </ThemeProvider>
      <Body></Body>
    </Container>
  );
};

const Container = styled.div`
  border-radius: 10px;
`;

const Header = styled.div<{ theme: WidgetTheme; expanded?: boolean }>`
  background-color: ${(props) => props.theme.foreground.color};
  padding: 10px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: ${(props) => (props.expanded ? "0px" : "10px")};
  border-bottom-right-radius: ${(props) => (props.expanded ? "0px" : "10px")};
  display: flex;
  min-width: 200px;
`;

const RoleName = styled(Text)`
  font-weight: 600;
  font-size: 14px;
`;

const RoleDescription = styled(Text)`
  font-weight: 400;
  font-size: 12px;
`;

const Action = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.color};
  cursor: pointer;
`;

const Body = styled.div`
  background-color: ${(props) => props.theme.background.color};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  height: 100px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
