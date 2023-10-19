import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService, { LoginBody } from "service/auth";

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
