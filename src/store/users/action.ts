import { createAsyncThunk } from "@reduxjs/toolkit";
import UserService, { ListUserQuery } from "service/user";

export const listUsers = createAsyncThunk(
  "users/listUsers",
  (query: ListUserQuery, { rejectWithValue }) => {
    return UserService.listUsers(query).catch(rejectWithValue);
  }
);

export const searchUsers = createAsyncThunk(
  "users/searchUsers",
  (query: ListUserQuery, { rejectWithValue }) => {
    return UserService.listUsers(query).catch(rejectWithValue);
  }
);
