import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { showToastMessage } from "common/toast";
import { Response } from "service";
import {
  CreatePlugin,
  CreatePluginResponse,
  FetchPluginResponse,
  PluginQuery,
} from "service/plugin";
import { useAppDispatch, useAppSelector } from "store";
import { FetchStatus } from "type/api.d";
import { IPlugin } from "type/plugin";
import { createPlugin, fetchPlugin } from "./action";

export type PluginState = {
  total: number;
  offset: number;
  limit: number;
  result: Array<IPlugin>;
  status: FetchStatus;
  createStatus: FetchStatus;
};

const initialState: PluginState = {
  total: 0,
  offset: 0,
  limit: 10,
  result: [],
  status: FetchStatus.NoAction,
  createStatus: FetchStatus.NoAction,
};

const slice = createSlice({
  name: "plugins",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    // -------------- List plugin ---------------
    builder.addCase(
      fetchPlugin.fulfilled,
      (state, action: PayloadAction<Response<FetchPluginResponse>>) => {
        state.limit = action.payload.data.limit;
        state.offset = action.payload.data.offset;
        state.result = action.payload.data.result;
        state.status = FetchStatus.Success;
      }
    );
    builder.addCase(
      fetchPlugin.rejected,
      (state, action: PayloadAction<any>) => {
        state.status = FetchStatus.Failed;
        showToastMessage(action.payload.messages);
      }
    );
    builder.addCase(fetchPlugin.pending, (state, _) => {
      state.status = FetchStatus.Loading;
    });

    // -------------- Create plugin ---------------
    builder.addCase(createPlugin.pending, (state, _) => {
      state.createStatus = FetchStatus.Loading;
    });
    builder.addCase(
      createPlugin.fulfilled,
      (state, action: PayloadAction<Response<CreatePluginResponse>>) => {
        state.createStatus = FetchStatus.Success;
      }
    );
    builder.addCase(createPlugin.rejected, (state, action: any) => {
      state.createStatus = FetchStatus.Failed;
    });
  },
});

export const pluginReducer = slice.reducer;

export const usePlugin = () => {
  const state = useAppSelector((state) => state.pluginReducer);
  const dispatch = useAppDispatch();

  const fetch = (query: PluginQuery) => {
    dispatch(fetchPlugin(query));
  };

  const create = async (data: CreatePlugin) => {
    await dispatch(createPlugin(data));
  };

  const getConfigured = (name: string) => {
    return state.result.find((record) => record.name === name);
  };

  return {
    ...state,
    plugins: state.result,
    fetch,
    create,
    getConfigured
    
  };
};
