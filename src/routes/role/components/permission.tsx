import { Tag, Tooltip } from "antd";
import React from "react";
import { useRole } from "store/roles/hook";
import { IPermission, PermissionMethod } from "type/permission";

type Props = {
  data: IPermission;
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
  const { selectedRole, attach } = useRole();
  const color = colorMapper[props.data.method as PermissionMethod];

  return (
    <Tooltip title={props.data.description} placement="bottom" color={color}>
      <Tag
        color={color}
        draggable={true}
        onDoubleClick={() => {
          if (props.data?.id) {
            attach({
              roleId: selectedRole,
              permissions: [+props.data.id],
            });
          }
        }}
      >
        {props.data.name}
      </Tag>
    </Tooltip>
  );
};
