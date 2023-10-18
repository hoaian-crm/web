import { Response, api, apiPromiseHandler } from "service";

export type LoginBody = {
  username: string;
  password: string;
};
export type LoginResponse = {
  access_token: string;
};

export default class AuthService {
  static login = async (data: LoginBody) => {
    return apiPromiseHandler<LoginResponse>(api.post("/users/login", data));
  };
}
