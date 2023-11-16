import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icons } from "common";
import { Point, Rect } from "common/graph";
import { Text } from "components/text";
import React, { useRef } from "react";
import { useAppDispatch, useAppSelector } from "store";
import { setDragToRole, toggleExpandRole } from "store/roles";
import { detachPermission } from "store/roles/action";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { WidgetTheme } from "theme";
import { IRole } from "type/role";

export type RoleProps = {
  data: IRole;
};

export const Role: React.FC<RoleProps> = (props) => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const expanded = useAppSelector(state => state.roleReducer.rolesExpand[props.data.id] == true)
  const containerRef = useRef<HTMLDivElement>(null);


  const onExpand = () => {
    dispatch(toggleExpandRole(props.data.id))
  }

  return (
    <ThemeProvider theme={theme.widgetTheme}>
      <Container
        ref={containerRef}
        onDragEnter={() => {
          dispatch(setDragToRole(props.data.id));
        }}
      >
        <ThemeProvider theme={theme.foreground.text}>
          <Header expanded={expanded}>
            <div>
              <RoleName>{props.data.name}</RoleName>
              <RoleDescription>{props.data.description}</RoleDescription>
            </div>
            <Action icon={Icons.ExpandIcon} style={{ marginLeft: "auto" }} onClick={onExpand} />
          </Header>
        </ThemeProvider>
        {expanded && <Body>
          {props.data.permissions.map(permission => <InnerPermission draggable={true}
            onDragEnd={(e) => {
              if (!Point.fromDragEvent(e).isInsideRect(Rect.fromDivRef(containerRef))) {
                dispatch(detachPermission({
                  roleId: props.data.id,
                  permissionId: permission.id
                }))
              }
            }}
          >
            <Text>{permission.name}</Text>
          </InnerPermission>)}
        </Body>}
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.div`
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  max-width: 300px;
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
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  gap: 5px;
`;

const InnerPermission = styled.div<{ theme: WidgetTheme }>`
  background-color: ${props => { return props.theme.primaryText.color }};
  padding: 5px;
  border-radius: 10px;
  p {
  font-size: 12px;
  color: white;
};
`