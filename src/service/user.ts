import { ApiCaller, api } from "./index";
import { Query, apiPromiseHandler } from "service";
import { IUser } from "type/user";

export type ListUserQuery = Query<{
  keyword?: string;
}>;

export type ListUserResponse = Array<IUser>;

namespace UserService {
  export const listUsers: ApiCaller<ListUserResponse> = (
    query: ListUserQuery
  ) => {
    return apiPromiseHandler(api.get("/users/list", { params: query }));
  };
}

export default UserService;
