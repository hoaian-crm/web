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

export default class AuthService {

  static login: ApiCaller<LoginResponse> = (data: LoginBody) => {
    return apiPromiseHandler(api.post("/users/login", data));
  };

  static getProfile: ApiCaller<GetProfileResponse> = () => {
    return apiPromiseHandler(api.get("/users/profile"));
  };

}
