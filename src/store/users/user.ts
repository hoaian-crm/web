import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "type/user";
import { listUsers, searchUsers } from "./action";
import { Response } from "service";
import { ListUserResponse } from "service/user";
import { FetchStatus } from "type/api.d";
import { errorHandler } from "common/error";

export type UserState = {
  users: Array<IUser>;
  fetchUsersStatus: FetchStatus;
  offset: number;
  limit: number;
  sort: string;
  keyword: string;
  total: number;
  searchResult: Array<IUser>;
  searchStatus: FetchStatus;
};

const initialState: UserState = {
  users: [],
  fetchUsersStatus: FetchStatus.NoAction,
  offset: 0,
  limit: 10,
  sort: "",
  keyword: "",
  total: 0,
  searchResult: [],
  searchStatus: FetchStatus.NoAction,
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
    builder.addCase(listUsers.rejected, (state, action: any) => {
      state.fetchUsersStatus = errorHandler(action);
    });
    builder.addCase(
      listUsers.fulfilled,
      (state, action: PayloadAction<Response<ListUserResponse>>) => {
        state.users = action.payload.data.result;
        state.total = action.payload.data.total;
        state.offset = action.payload.data.offset;
        state.limit = action.payload.data.limit;
        state.fetchUsersStatus = FetchStatus.Success;
      }
    );
    builder.addCase(listUsers.pending, (state, _) => {
      state.fetchUsersStatus = FetchStatus.Loading;
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
