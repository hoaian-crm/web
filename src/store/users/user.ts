import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "type/user";
import { listUsers, searchUsers } from "./action";
import { Response } from "service";
import { ListUserResponse } from "service/user";

export enum FetchUserStatus {
  Loading,
  Success,
  Failed,
  NoAction,
}

export type UserState = {
  users: Array<IUser>;
  fetchUsersStatus: FetchUserStatus;
  offset: number;
  limit: number;
  sort: string;
  keyword: string;
  total: number;
  searchResult: Array<IUser>;
  searchStatus: FetchUserStatus;
};

const initialState: UserState = {
  users: [],
  fetchUsersStatus: FetchUserStatus.NoAction,
  offset: 0,
  limit: 10,
  sort: "",
  keyword: "",
  total: 0,
  searchResult: [],
  searchStatus: FetchUserStatus.NoAction,
};

const slice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    resetSearchResult: (state) => {
      state.searchResult = [];
    },
  },
  extraReducers: (builder) => {
    // ---------------------------- List Users --------------------------
    builder.addCase(listUsers.rejected, (state, _) => {
      state.fetchUsersStatus = FetchUserStatus.Failed;
    });
    builder.addCase(
      listUsers.fulfilled,
      (state, action: PayloadAction<Response<ListUserResponse>>) => {
        state.users = action.payload.data.result;
        state.total = action.payload.data.total;
        state.offset = action.payload.data.offset;
        state.limit = action.payload.data.limit;
        state.fetchUsersStatus = FetchUserStatus.Success;
      }
    );
    builder.addCase(listUsers.pending, (state, _) => {
      state.fetchUsersStatus = FetchUserStatus.Loading;
    });

    // ---------------------------- Search Users ----------------------------
    builder.addCase(
      searchUsers.fulfilled,
      (state, action: PayloadAction<Response<ListUserResponse>>) => {
        state.searchResult = action.payload.data.result;
      }
    );
  },
});

export const userReducer = slice.reducer;

export const { resetSearchResult } = slice.actions;
