import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { errorHandler } from "common/error";
import { showToastMessage } from "common/toast";
import {
    AttachPermissionResponse,
    DetachPermissionResponse,
    ListRoleResponse,
    UpdateRoleResponse,
} from "service/role";
import { FetchStatus } from "type/FetchStatus";
import { IRole } from "type/role";
import { Response } from "./../../service/index";
import { CreateRoleResponse } from "./../../service/role";
import {
    attachPermission,
    createRole,
    deleteRole,
    detachPermission,
    fetchRole,
    updateRole,
} from "./action";

export enum FetchRoleStatus {
  NoAction,
  Loading,
  Failed,
  Success,
}

export type RoleState = {
  roles: Array<IRole>;
  fetchStatus: FetchStatus;
  total: number;
  offset: number;
  limit: number;
  selectedRole?: IRole;
  updateStatus: FetchStatus;
  deleteStatus: FetchStatus;
};

const initialState: RoleState = {
  roles: [],
  fetchStatus: FetchStatus.NoAction,
  total: 0,
  offset: 0,
  limit: 0,
  selectedRole: undefined,
  updateStatus: FetchStatus.NoAction,
  deleteStatus: FetchStatus.NoAction
};

const slice = createSlice({
  name: "roles",
  initialState: initialState,
  reducers: {
    selectRole: (state, action: PayloadAction<IRole>) => {
      state.selectedRole = action.payload;
    },
    deselectRole: (state) => {
      state.selectedRole = undefined;
    },
  },
  extraReducers: (builder) => {
    // --------------------- Fetch role -----------------------
    builder.addCase(
      fetchRole.fulfilled,
      (state, action: PayloadAction<Response<ListRoleResponse>>) => {
        state.roles = action.payload.data.result;
        state.total = action.payload.data.total;
        state.offset = action.payload.data.offset;
        state.limit = action.payload.data.limit;
        state.fetchStatus = FetchStatus.Success;
      }
    );

    builder.addCase(fetchRole.pending, (state, _) => {
      state.fetchStatus = FetchStatus.Loading;
    });

    builder.addCase(fetchRole.rejected, (state, action: PayloadAction<any>) => {
      state.fetchStatus = errorHandler(action);
    });

    // ---------------------- Attach Permission ------------------
    builder.addCase(
      attachPermission.fulfilled,
      (state, action: PayloadAction<Response<AttachPermissionResponse>>) => {
        const newRole = action.payload.data.result;
        state.roles = state.roles.map((role) => {
          if (role.id !== action.payload.data.result.id) {
            return role;
          }
          return {
            ...role,
            ...newRole,
          };
        });
        if (state.selectedRole?.id === newRole.id) state.selectedRole = newRole;
        showToastMessage(action.payload.messages);
      }
    );

    // ---------------------- Detach Permission
    builder.addCase(
      detachPermission.fulfilled,
      (state, action: PayloadAction<Response<DetachPermissionResponse>>) => {
        const data = action.payload.data.result;
        state.roles = state.roles.map((role) => {
          if (role.id === data.id) {
            return data;
          }
          return role;
        });
        showToastMessage(action.payload.messages);
      }
    );

    // --------------------- Create Role ---------------------
    builder.addCase(createRole.pending, (state) => {
      state.fetchStatus = FetchStatus.Loading;
    });
    builder.addCase(
      createRole.fulfilled,
      (state, action: PayloadAction<Response<CreateRoleResponse>>) => {
        state.roles.push(action.payload.data.result);
        state.fetchStatus = FetchStatus.Success;
        showToastMessage(action.payload.messages);
      }
    );
    builder.addCase(
      createRole.rejected,
      (state, action: PayloadAction<any>) => {
        state.fetchStatus = FetchStatus.Failed;
        showToastMessage(action.payload.messages);
      }
    );

    // -------------------- Update role ---------------------
    builder.addCase(
      updateRole.fulfilled,
      (state, action: PayloadAction<Response<UpdateRoleResponse>>) => {
        state.updateStatus = FetchStatus.Success;
        showToastMessage(action.payload.messages);
      }
    );

    // -------------------- Delete role -------------------
    builder.addCase(deleteRole.fulfilled, (state) => {
      state.deleteStatus = FetchStatus.Success;
    })
  },
});

export const roleReducer = slice.reducer;
export const { selectRole, deselectRole } = slice.actions;
