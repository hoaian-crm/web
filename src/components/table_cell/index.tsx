import React, { ReactText } from "react";
import styled, { ThemeProvider, useTheme } from "styled-components";
import { TableTheme } from "theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icons } from "common";
import { Colors } from "theme/color";
import { Text } from "components/text";
import { InformationCell } from "./information";
import { DateCell } from "./date";
import { TimeAgoCell } from "./time_ago";

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
  Information,
  Date,
  TimeAgo
}

export const CellContainer = styled.td`
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

export const TextStyle = styled(Text)`
  color: ${(props) => props.theme.primaryText.color};
  font-size: 14px;
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
  width: 40px;
  height: 40px;
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
          <BooleanText>
            {props.metadata[children?.toString() || "false"].content}
          </BooleanText>
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
  [CellTypes.Information]: InformationCell,
  [CellTypes.Date]: DateCell,
  [CellTypes.TimeAgo]: TimeAgoCell
};

export default Cells;
