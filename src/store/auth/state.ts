import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "type/user";
import { getProfile, login } from "./actions";
import { showToastMessage } from "common/toast";

export enum AuthStatus {
  Loading,
  Success,
  Failed,
  NoAction,
}

export enum ProfileStatus {
  Loading,
  Success,
  Failed,
  NoAction,
}

export type AuthState = {
  currentUser?: IUser;
  accessToken: string;
  status: AuthStatus;
  getProfileStatus: ProfileStatus;
};

const initialState: AuthState = {
  accessToken: localStorage.getItem("access_token") || "",
  status: AuthStatus.NoAction,
  getProfileStatus: ProfileStatus.NoAction,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //  ------------ Login ------------------
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = AuthStatus.Success;
      state.accessToken = action.payload.data.result.accessToken;
      localStorage["accessToken"] = state.accessToken;
    });
    builder.addCase(login.pending, (state, _) => {
      state.status = AuthStatus.Loading;
    });
    builder.addCase(login.rejected, (state, action: PayloadAction<any>) => {
      state.status = AuthStatus.Failed;
      showToastMessage(action.payload.messages);
    });

    //  ------------ Get profile ------------------
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.getProfileStatus = ProfileStatus.Success;
      state.currentUser = action.payload.data.result;
    });
    builder.addCase(getProfile.pending, (state, _) => {
      state.getProfileStatus = ProfileStatus.Loading;
    });
    builder.addCase(
      getProfile.rejected,
      (state, action: PayloadAction<any>) => {
        state.getProfileStatus = ProfileStatus.Failed;
      }
    );
  },
});

export const authReducer = AuthSlice.reducer;
