import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icons } from "common";
import { Text } from "components/text";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Tooltip } from "react-tooltip";
import { useAppDispatch, useAppSelector } from "store";
import { setDragToRole } from "store/roles";
import { attachPermission } from "store/roles/action";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { WidgetTheme } from "theme";
import { IPermission } from "type/permission";

export type PermissionProps = {
  data: IPermission;
  isSelected?: boolean;
  onMouseDown?: () => void;
  onMouseUp?: () => void;
};

export const Permission: React.FC<PermissionProps> = (props) => {
  const theme = useTheme() as WidgetTheme;
  const roleState = useAppSelector((state) => state.roleReducer);
  const permissionState = useAppSelector((state) => state.permissionReducer);
  const dispatch = useAppDispatch();
  return (
    <Container
      onClick={props.onMouseDown}
      onDragEnd={() => {
        dispatch(
          attachPermission({
            roleId: roleState.dragToRole,
            permissions: Object.keys(permissionState.selectedPermission).map(
              (permission) => +permission
            ),
          })
        );
        dispatch(setDragToRole(""));
      }}
      draggable={true}
      onDragStart={props.onMouseDown}
    >
      <ThemeProvider theme={theme.foreground.text}>
        <Selection isSelected={!!props.isSelected} />
        <Name>{props.data.name}</Name>
        <a
          data-tooltip-content={props.data.description}
          data-tooltip-id="description"
          data-tooltip-place="bottom"
        >
          <FontAwesomeIcon icon={Icons.InformationIcon} color="white" />
        </a>
        <Tooltip
          id="description"
          variant="info"
          style={{
            marginTop: 10,
            fontFamily: "Poppins, sans-serif",
          }}
        />
      </ThemeProvider>
    </Container>
  );
};

export const Container = styled.div`
  min-width: 200px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.foreground.color};
  padding: 10px;
  flex: 1;
  cursor: pointer;
`;

export const Selection = styled.div<{ isSelected: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 100px;
  border: 1px ${(props) => props.theme.color} solid;
  background-color: ${(props) =>
    props.isSelected ? props.theme.color : "transparent"};
  display: flex;
  transform: translate(0, 0);
`;

export const Name = styled(Text)`
  font-size: 12px;
  display: inline;
  margin-right: auto;
`;
