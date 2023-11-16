import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Response } from "service";
import { GetPermissionsResponse } from "service/permission";
import { IPermission } from "type/permission";
import { fetchPermission } from "./action";

export enum FetchPermissionStatus {
  NoAction,
  Loading,
  Success,
  Failed,
}

export type PermissionsState = {
  result: Array<IPermission>;
  fetchPermissionStatus: FetchPermissionStatus;
  total: number;
  offset: number;
  limit: number;
  selectedPermission: {
    [key: string]: boolean;
  };
};

const initialState: PermissionsState = {
  result: [],
  fetchPermissionStatus: FetchPermissionStatus.NoAction,
  total: 0,
  offset: 0,
  limit: 0,
  selectedPermission: {},
};

const slice = createSlice({
  name: "permissions",
  initialState: initialState,
  reducers: {
    selectPermissions(state, action: PayloadAction<string[]>) {
      action.payload.forEach((id) => {
        state.selectedPermission[id] = true;
      });
    },
    resetSelectPermission(state) {
      state.selectedPermission = {};
    },
  },
  extraReducers: (builder) => {
    // --------------- Fetch Permission ------------
    builder.addCase(
      fetchPermission.fulfilled,
      (state, action: PayloadAction<Response<GetPermissionsResponse>>) => {
        state.total = action.payload.data.total;
        state.result = action.payload.data.result;
        state.limit = action.payload.data.limit;
        state.offset = action.payload.data.offset;
        state.fetchPermissionStatus = FetchPermissionStatus.Success;
      }
    );
    builder.addCase(fetchPermission.rejected, (state, _) => {
      state.fetchPermissionStatus = FetchPermissionStatus.Failed;
    });
    builder.addCase(fetchPermission.pending, (state, _) => {
      state.fetchPermissionStatus = FetchPermissionStatus.Loading;
    });
  },
});

export const permissionReducer = slice.reducer;

export const { selectPermissions, resetSelectPermission } = slice.actions;
