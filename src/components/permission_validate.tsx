import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icons } from "common";
import React from "react";
import { FetchStatus } from "type/api.d";
import styled from "styled-components";
import { Text } from "./text";
import { Colors } from "theme/color";

enum PermissionValidateType {
  Hidden,
  Show,
}

export type PermissionValidateProps = {
  children?: React.ReactNode;
  type?: PermissionValidateType;
  denied: boolean;
};

export const PermissionValidate: React.FC<PermissionValidateProps> = (
  { type = PermissionValidateType.Show, ...props },
) => {
  if (props.denied) {
    return (
      <Container>
        <Icon icon={Icons.LockIcon} />
        <Description>Permission Denied</Description>
      </Container>
    );
  } else {
    return props.children;
  }
};

const Icon = styled(FontAwesomeIcon)`
  font-size: 30px;
  color: ${Colors.blue01};
`;

const Description = styled(Text)``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 10px;
`;
