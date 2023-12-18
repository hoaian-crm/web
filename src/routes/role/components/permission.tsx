import { Tag, Tooltip } from "antd";
import React from "react";
import { IPermission, PermissionMethod } from "type/permission";

type Props = {
  data: IPermission;
  icon?: React.ReactNode;
};

const colorMapper: {
  [key in PermissionMethod]: string;
} = {
  GET: "green",
  POST: "geekblue",
  PUT: "volcano",
  DELETE: "red",
  PATCH: "purple",
};
export const Permission: React.FC<Props> = (props) => {
  const color = colorMapper[props.data.method as PermissionMethod];

  return (
    <Tooltip title={props.data.description} placement="bottom" color={color}>
      <Tag
        icon={props.icon}
        color={color}
      >
        {props.data.name}
      </Tag>
    </Tooltip>
  );
};
