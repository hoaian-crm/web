import { createAsyncThunk } from "@reduxjs/toolkit";
import RoleService, {
  AttachPermission,
  CreateRole,
  DeleteRole,
  DetachPermission,
  RoleQuery,
  UpdateRole,
} from "service/role";

export const createRole = createAsyncThunk(
  "roles/create",
  (data: CreateRole, { rejectWithValue }) => {
    return RoleService.create(data).catch(rejectWithValue);
  }
);

export const fetchRole = createAsyncThunk(
  "roles/fetch",
  (query: RoleQuery, { rejectWithValue }) => {
    return RoleService.list(query).catch(rejectWithValue);
  }
);

export const attachPermission = createAsyncThunk(
  "roles/attach",
  (data: AttachPermission, { rejectWithValue }) => {
    return RoleService.attachPermission(data).catch(rejectWithValue);
  }
);

export const detachPermission = createAsyncThunk(
  "roles/detach",
  (data: DetachPermission, { rejectWithValue }) => {
    return RoleService.detachPermission(data).catch(rejectWithValue);
  }
);

export const updateRole = createAsyncThunk(
  "roles/update",
  (data: UpdateRole, { rejectWithValue }) => {
    return RoleService.updateRole(data).catch(rejectWithValue);
  }
);

export const deleteRole = createAsyncThunk(
  "roles/delete",
  (data: DeleteRole, { rejectWithValue }) => {
    return RoleService.deleteRole(data).catch(rejectWithValue);
  }
);
