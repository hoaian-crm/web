import { Text } from "components/text";
import React from "react";
import { Tooltip } from "react-tooltip";
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
  return (
    <Container onMouseDown={props.onMouseDown} draggable={props.isSelected} onMouseUp={props.onMouseUp}>
      <ThemeProvider theme={theme.foreground.text}>
        <Selection isSelected={!!props.isSelected} />
        <a
          data-tooltip-content={props.data.description}
          data-tooltip-id="description"
          data-tooltip-place="bottom-start"
        >
          <Name>{props.data.name}</Name>
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
`;
