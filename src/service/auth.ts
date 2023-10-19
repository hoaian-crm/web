import { api, apiPromiseHandler } from "service";
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
  static login = (data: LoginBody) => {
    return apiPromiseHandler<LoginResponse>(api.post("/users/login", data));
  };

  static getProfile = () => {
    return apiPromiseHandler<GetProfileResponse>(api.get("/users/profile"));
  };
}
