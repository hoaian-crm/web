import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Response } from "service";
import { AttachPermissionResponse, ListRoleResponse } from "service/role";
import { IRole } from "type/role";
import { attachPermission, fetchRole } from "./action";

export enum FetchRoleStatus {
  NoAction,
  Loading,
  Failed,
  Success,
}

export type RoleState = {
  roles: Array<IRole>;
  fetchStatus: FetchRoleStatus;
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
  fetchStatus: FetchRoleStatus.NoAction,
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
        state.fetchStatus = FetchRoleStatus.Success;
      }
    );

    builder.addCase(fetchRole.pending, (state, _) => {
      state.fetchStatus = FetchRoleStatus.Loading;
    });

    builder.addCase(fetchRole.rejected, (state, _) => {
      state.fetchStatus = FetchRoleStatus.Failed;
    });

    // ---------------------- Attach Role ------------------
    builder.addCase(
      attachPermission.fulfilled,
      (state, action: PayloadAction<Response<AttachPermissionResponse>>) => {
        const newRole = action.payload.data.result;
        console.log("newRole is: ", newRole);
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
      }
    );
  },
});

export const roleReducer = slice.reducer;
export const { setDragToRole, setExpandRole, toggleExpandRole } = slice.actions;
