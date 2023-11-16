import React from "react";
import { CellContainer, CellProps, TextStyle } from ".";
import moment from "moment";

export const DateCell: React.FC<CellProps> = ({ children, ...props }) => {
  return (
    <CellContainer>
      <TextStyle>{moment(children?.toString()).format("DD-MM-YYYY")}</TextStyle>
    </CellContainer>
  );
};
