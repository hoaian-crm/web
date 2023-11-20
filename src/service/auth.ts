import { ApiCaller, api, apiPromiseHandler } from "service";
import { IUser } from "type/user";

export type LoginBody = {
  email: string;
  password: string;
};

export type RegisterBody = {
  email: string;
  password: string;
};

export type ActiveUserBody = {
  email: string;
  otp_code: string;
};

export type LoginResponse = {
  accessToken: string;
};

export type RegisterResponse = IUser;

export type ActiveUserResponse = IUser;

export type GetProfileResponse = IUser;

namespace AuthService {
  export const register: ApiCaller<RegisterResponse> = (data: RegisterBody) => {
    return apiPromiseHandler(api.post("/users/register", data));
  };

  export const activeUser: ApiCaller<ActiveUserResponse> = (
    data: ActiveUserBody
  ) => {
    return apiPromiseHandler(api.put("/users/active", data));
  };

  export const login: ApiCaller<LoginResponse> = (data: LoginBody) => {
    return apiPromiseHandler(api.post("/users/login", data));
  };

  export const getProfile: ApiCaller<GetProfileResponse> = () => {
    return apiPromiseHandler(api.get("/users/profile"));
  };
}

export default AuthService;
