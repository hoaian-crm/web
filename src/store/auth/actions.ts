import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService, { LoginBody } from "service/auth";

export const login = createAsyncThunk("auth/login", (data: LoginBody) => {
  return AuthService.login(data);
});
