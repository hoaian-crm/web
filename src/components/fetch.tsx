import React, { HTMLAttributes } from "react";
import { FetchStatus } from "type/FetchStatus";
import { Loading } from "./loadding";
import { PermissionValidate } from "./permission_validate";

export type FetchProps = {
  children?: React.ReactNode;
  status?: FetchStatus;
} & HTMLAttributes<HTMLDivElement>;

export const Fetch: React.FC<FetchProps> = (props) => {
  return (
    <div className={props.className}>
      <Loading
        size="20px"
        loading={
          props.status === FetchStatus.Loading ||
          props.status === FetchStatus.NoAction
        }
      >
        <PermissionValidate
          denied={props.status === FetchStatus.PermissionDenied}
        >
          {props.children}
        </PermissionValidate>
      </Loading>
    </div>
  );
};
