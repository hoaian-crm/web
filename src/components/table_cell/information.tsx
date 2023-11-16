import React from "react";

import { CellContainer, CellProps, TextStyle } from ".";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icons } from "common";
import { Colors } from "theme/color";
import styled from "styled-components";
import { ToolTip } from "components/tool_tip";

export const InformationCell: React.FC<CellProps> = ({
  children,
  ...props
}) => {
  return (
    <CellContainer>
      <Container>
        <TextStyle>{children}</TextStyle>
        <ToolTip content={props.metadata?.description} id="description">
          <FontAwesomeIcon
            icon={Icons.InformationIcon}
            color={Colors.black03}
          />
        </ToolTip>
      </Container>
    </CellContainer>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
`;
