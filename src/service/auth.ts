import { ApiCaller, api, apiPromiseHandler } from "service";
import { IUser } from "type/user";

export type LoginBody = {
  email: string;
  password: string;
};
export type LoginResponse = {
  accessToken: string;
};

export type GetProfileResponse = IUser;

namespace AuthService {
  export const login: ApiCaller<LoginResponse> = (data: LoginBody) => {
    return apiPromiseHandler(api.post("/users/login", data));
  };

  export const getProfile: ApiCaller<GetProfileResponse> = () => {
    return apiPromiseHandler(api.get("/users/profile"));
  };
}

export default AuthService;
