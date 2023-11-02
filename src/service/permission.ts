import { ApiCaller, Query, api, apiPromiseHandler } from "service";
import { IPermission } from "type/permission";

export type PermissionQuery = Query<{ keyword: string }>;
export type GetPermissionsResponse = Array<IPermission>;

namespace PermissionService {
  export const getPermissions: ApiCaller<GetPermissionsResponse> = (
    query: PermissionQuery
  ) => {
    return apiPromiseHandler(api.get("/permissions/", { params: query }));
  };
}

export default PermissionService;
