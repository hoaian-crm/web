import { Response, api, apiPromiseHandler } from "./index";
import { ApiCaller, Query } from "service";
import { IRole } from "type/role";

export type RoleQuery = Query<{ keyword: string }>;
export type ListRoleResponse = Array<IRole>;

export type AttachPermission = {
  roleId: string;
  permissions: Array<number>;
};

export type AttachPermissionResponse = IRole;

namespace RoleService {
  export const list: ApiCaller<ListRoleResponse> = (query: RoleQuery) => {
    return apiPromiseHandler(api.get("/roles/", { params: query }));
  };

  export const attachPermission: ApiCaller<AttachPermission> = (
    data: AttachPermission
  ) => {
    return apiPromiseHandler(
      api.patch(`/roles/${data.roleId}/permisisons`, data)
    );
  };
}

export default RoleService;
