import React from "react";
import { Tooltip } from "react-tooltip";

export type ToolTipProps = {
  children?: React.ReactNode;
  content?: string;
  id?: string;
};

export const ToolTip: React.FC<ToolTipProps> = (props) => {
  return (
    <>
      <a
        data-tooltip-content={props.content}
        data-tooltip-id={props.id}
        data-tooltip-place="bottom"
      >
        {props.children}
      </a>
      <Tooltip
        id={props.id}
        variant="info"
        style={{
          marginTop: 10,
          fontFamily: "Poppins, sans-serif",
        }}
      />
    </>
  );
};
