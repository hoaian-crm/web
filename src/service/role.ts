import { ApiCaller, Query } from "service";
import { IRole } from "type/role";
import { api, apiPromiseHandler } from "./index";

export type RoleQuery = Query<{ keyword: string }>;
export type ListRoleResponse = Array<IRole>;
export type CreateRole = {
  name: string;
  description: string;
};
export type AttachPermission = {
  roleId: string;
  permissions: Array<number>;
};
export type DetachPermission = {
  roleId: string;
  permissionId: string | number;
};

export type AttachPermissionResponse = IRole;
export type DetachPermissionResponse = IRole;
export type CreateRoleResponse = IRole;

namespace RoleService {

  export const create: ApiCaller<CreateRoleResponse> = (data: CreateRole) => {
    return apiPromiseHandler(api.post("/roles/", data));
  }

  export const list: ApiCaller<ListRoleResponse> = (query: RoleQuery) => {
    return apiPromiseHandler(api.get("/roles/", { params: query }));
  };

  export const attachPermission: ApiCaller<AttachPermissionResponse> = (
    data: AttachPermission
  ) => {
    return apiPromiseHandler(
      api.patch(`/roles/${data.roleId}/permissions`, data)
    );
  };

  export const detachPermission: ApiCaller<DetachPermissionResponse> = (
    data: DetachPermission
  ) => {
    return apiPromiseHandler(
      api.delete(`/roles/${data.roleId}/permissions/${data.permissionId}`)
    );
  };
}

export default RoleService;
