import React, { ReactText } from "react";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { Text } from "./text";
import { TableTheme } from "theme";

export type CellProps = {
  children?: React.ReactNode;
  metadata?: any;
};

export enum CellTypes {
  Text,
  Image,
  Number,
  Document,
  Boolean,
}

const CellContainer = styled.td`
  padding: 10px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
`;

const TextCell: React.FC<CellProps> = ({ children }) => {
  return (
    <CellContainer>
      <TextStyle>{children}</TextStyle>
    </CellContainer>
  );
};

const TextStyle = styled(Text)`
  color: ${(props) => props.theme.primaryText.color};
`;

const ImageCell: React.FC<CellProps> = ({ children }) => {
  return (
    <CellContainer>
      <ImageStyle src={children?.toString()} />
    </CellContainer>
  );
};

const ImageStyle = styled.img`
  border-radius: 100px;
  width: 20px;
  height: 20px;
`;

const BooleanCell: React.FC<CellProps> = ({ children, ...props }) => {
  const theme = useTheme() as TableTheme;
  return (
    <ThemeProvider
      theme={
        props.metadata[children?.toString() || "false"].value
          ? theme.trueTheme
          : theme.falseTheme
      }
    >
      <CellContainer>
        <BooleanStyle>
          <BooleanText>{props.metadata[children?.toString() || "false"].content}</BooleanText>
        </BooleanStyle>
      </CellContainer>
    </ThemeProvider>
  );
};
const BooleanStyle = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 5px;
  padding: 3px 0;
  border: 1px solid ${(props) => props.theme.foregroundColor};
`;
const BooleanText = styled(Text)`
  color: ${(props) => props.theme.foregroundColor};
  font-size: 14px;
`;

const Cells: {
  [key in CellTypes]: React.FC<CellProps>;
} = {
  [CellTypes.Text]: TextCell,
  [CellTypes.Image]: ImageCell,
  [CellTypes.Number]: TextCell,
  [CellTypes.Document]: TextCell,
  [CellTypes.Boolean]: BooleanCell,
};

export default Cells;
