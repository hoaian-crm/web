import {
  AttachPermission,
  CreateRole,
  DeleteRole,
  DetachPermission,
  RoleQuery,
  UpdateRole,
} from "service/role";
import { useAppDispatch, useAppSelector } from "store";
import { usePermission } from "store/permissions/hook";
import { IPermission } from "type/permission";
import { IRole } from "type/role";
import { deselectRole, selectRole } from ".";
import {
  attachPermission,
  createRole,
  deleteRole,
  detachPermission,
  fetchRole,
  updateRole,
} from "./action";

export const useRole = () => {
  const state = useAppSelector((state) => state.roleReducer);
  const { result: permissions } = usePermission();
  const dispatch = useAppDispatch();

  const fetch = (query: RoleQuery) => {
    return dispatch(fetchRole(query));
  };

  const create = (data: CreateRole) => {
    return dispatch(createRole(data));
  };

  const attach = (data: AttachPermission) => {
    return dispatch(attachPermission(data));
  };

  const detach = (data: DetachPermission) => {
    return dispatch(detachPermission(data));
  };

  const update = async (data: UpdateRole) => {
    await dispatch(updateRole(data));
  };

  const remove = async (data: DeleteRole) => {
    await dispatch(deleteRole(data));
    await dispatch(fetchRole({ limit: "1000" }));
  };

  const select = (role: IRole) => {
    return dispatch(selectRole(role));
  };

  const deselect = () => {
    return dispatch(deselectRole());
  };

  const isHavePermission = (
    role: IRole | undefined,
    permission: IPermission
  ) => {
    return role?.permissions.map((p) => p.id).includes(permission.id);
  };

  return {
    ...state,
    fetch,
    create,
    attach,
    detach,
    update,
    remove,
    select,
    deselect,
    isHavePermission,
  };
};
