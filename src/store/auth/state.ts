import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "type/user";
import { activeUser, getProfile, login, register } from "./actions";
import { showToastMessage } from "common/toast";
import { FetchStatus } from "type/api.d";
import { errorHandler } from "common/error";

export type AuthState = {
  currentUser?: IUser;
  accessToken: string;
  status: FetchStatus;
  getProfileStatus: FetchStatus;
};

const initialState: AuthState = {
  accessToken: localStorage.getItem("access_token") || "",
  status: FetchStatus.NoAction,
  getProfileStatus: FetchStatus.NoAction,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //  ------------ Login ------------------
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = FetchStatus.Success;
      state.accessToken = action.payload.data.result.accessToken;
      localStorage["accessToken"] = state.accessToken;
    });
    builder.addCase(login.pending, (state, _) => {
      state.status = FetchStatus.Loading;
    });
    builder.addCase(login.rejected, (state, action: PayloadAction<any>) => {
      state.status = FetchStatus.Failed;
      showToastMessage(action.payload.messages);
    });

    //  ------------ Get profile ------------------
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.getProfileStatus = FetchStatus.Success;
      state.currentUser = action.payload.data.result;
    });
    builder.addCase(getProfile.pending, (state, _) => {
      state.getProfileStatus = FetchStatus.Loading;
    });
    builder.addCase(
      getProfile.rejected,
      (state, action: PayloadAction<any>) => {
        state.getProfileStatus = FetchStatus.Failed;
      }
    );

    // ---------------- Register ----------------
    builder.addCase(register.fulfilled, () => {
      window.location.href = "/verify_otp";
    });
    builder.addCase(register.rejected, (state, action: any) => {
      errorHandler(action);
    });

    // ---------------- Active user -----------------
    builder.addCase(activeUser.fulfilled, () => {
      window.location.href = "/login";
    });
    builder.addCase(activeUser.rejected, (state, action: any) => {
      errorHandler(action);
    });
  },
});

export const authReducer = AuthSlice.reducer;
