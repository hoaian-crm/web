import { createAsyncThunk } from "@reduxjs/toolkit";
import PermissionService, { PermissionQuery } from "service/permission";

export const fetchPermission = createAsyncThunk(
  "permission/fetch",
  (query: PermissionQuery, { rejectWithValue }) => {
    return PermissionService.getPermissions(query).catch(rejectWithValue);
  }
);
