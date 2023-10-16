import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "type/user";
import { login } from "./actions";

export enum AuthStatus {
  Loading,
  Success,
  Failed,
}

export type AuthState = {
  currentUser?: IUser;
  accessToken: string;
  status: AuthStatus;
};

const initialState: AuthState = {
  accessToken: localStorage.getItem("access_token") || "",
  status: AuthStatus.Success,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // login
    builder.addCase(login.fulfilled, (state, _) => {
      state.status = AuthStatus.Success;
    });
    builder.addCase(login.pending, (state, _) => {
      state.status = AuthStatus.Loading;
    });
    builder.addCase(login.rejected, (state, _) => {
      state.status = AuthStatus.Failed;
    });
  },
});

export default AuthSlice.reducer;
