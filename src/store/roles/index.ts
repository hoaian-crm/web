import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { showToastMessage } from "common/toast";
import {
  AttachPermissionResponse,
  DetachPermissionResponse,
  ListRoleResponse,
} from "service/role";
import { FetchStatus } from "type/api.d";
import { IRole } from "type/role";
import { Response } from "./../../service/index";
import { CreateRoleResponse } from "./../../service/role";
import {
  attachPermission,
  createRole,
  detachPermission,
  fetchRole,
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
  dragToRole: string;
  rolesExpand: {
    [key: string]: boolean;
  };
};

const initialState: RoleState = {
  roles: [],
  fetchStatus: FetchStatus.NoAction,
  total: 0,
  offset: 0,
  limit: 0,
  dragToRole: "",
  rolesExpand: {},
};

const slice = createSlice({
  name: "roles",
  initialState: initialState,
  reducers: {
    setDragToRole(state, action) {
      state.dragToRole = action.payload;
    },
    setExpandRole(
      state,
      action: PayloadAction<{ id: string; expand: boolean }>
    ) {
      state.rolesExpand[action.payload.id] = action.payload.expand;
    },
    toggleExpandRole(state, action: PayloadAction<string>) {
      state.rolesExpand[action.payload] = !state.rolesExpand[action.payload];
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
          state.rolesExpand[newRole.id] = true;
          return {
            ...role,
            ...newRole,
          };
        });
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
      state.fetchStatus = FetchRoleStatus.Loading;
    });
    builder.addCase(
      createRole.fulfilled,
      (state, action: PayloadAction<Response<CreateRoleResponse>>) => {
        state.roles.push(action.payload.data.result);
        state.fetchStatus = FetchRoleStatus.Success;
        showToastMessage(action.payload.messages);
      }
    );
    builder.addCase(
      createRole.rejected,
      (state, action: PayloadAction<any>) => {
        state.fetchStatus = FetchRoleStatus.Failed;
        showToastMessage(action.payload.messages);
      }
    );
  },
});

export const roleReducer = slice.reducer;
export const { setDragToRole, setExpandRole, toggleExpandRole } = slice.actions;
