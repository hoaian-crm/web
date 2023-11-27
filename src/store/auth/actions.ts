import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService, { ActiveUserBody, LoginBody, RegisterBody } from "service/auth";

export const register = createAsyncThunk(
  "auth/register",
  (data: RegisterBody, { rejectWithValue }) => {
    return AuthService.register(data).catch(rejectWithValue);
  }
);

export const activeUser = createAsyncThunk(
  "auth/activeUser",
  (data: ActiveUserBody, {rejectWithValue}) => {
    return AuthService.activeUser(data).catch(rejectWithValue);
  }
)

export const login = createAsyncThunk(
  "auth/login",
  (data: LoginBody, { rejectWithValue }) => {
    return AuthService.login(data).catch(rejectWithValue);
  }
);

export const getProfile = createAsyncThunk(
  "auth/getProfile",
  (_, { rejectWithValue }) => {
    return AuthService.getProfile().catch(rejectWithValue);
  }
);
