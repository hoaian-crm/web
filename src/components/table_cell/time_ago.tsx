import React from "react";
import { CellContainer, CellProps, TextStyle } from ".";
import { timeAgo } from "index";

export const TimeAgoCell: React.FC<CellProps> = ({ children, ...props }) => {

  console.log(Date.now() - new Date(children?.toString() || "").getTime()
)

  return (
    <CellContainer>
      <TextStyle>
        {timeAgo.format(
          new Date(children?.toString() || "").getTime()
        )}
      </TextStyle>
    </CellContainer>
  );
};
