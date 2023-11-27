import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FetchStatus } from "type/api.d";
import { fetchPlugin } from "./action";
import { Response } from "service";
import { FetchPluginResponse, PluginQuery } from "service/plugin";
import { IPlugin } from "type/plugin";
import { useAppDispatch, useAppSelector } from "store";
import { useEffect } from "react";
import { showToastMessage } from "common/toast";

export type PluginState = {
  total: number;
  offset: number;
  limit: number;
  result: Array<IPlugin>;
  status: FetchStatus
}

const initialState: PluginState = {
  total: 0,
  offset: 0,
  limit: 10,
  result: [],
  status: FetchStatus.NoAction
}

const slice = createSlice({
  name: 'plugins',
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPlugin.fulfilled, (state, action: PayloadAction<Response<FetchPluginResponse>>)  => {
      state.limit = action.payload.data.limit;
      state.offset = action.payload.data.offset;
      state.result = action.payload.data.result;
      state.status = FetchStatus.Success
    })
    builder.addCase(fetchPlugin.rejected, (state, action: PayloadAction<any>)  => {
      state.status = FetchStatus.Failed
      showToastMessage(action.payload.messages)
    })
    builder.addCase(fetchPlugin.pending, (state, _) => {
      state.status = FetchStatus.Loading
    })
  }
})

export const pluginReducer = slice.reducer;

export const usePlugin = () => {
  const state = useAppSelector(state => state.pluginReducer)
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    if (state.status === FetchStatus.NoAction) {
      dispatch(fetchPlugin({
        limit: "10",
        keyword: ""
      }))
    }
  }, [])

  const fetch = (query: PluginQuery) => {
    dispatch(fetchPlugin(query));
  }

  return {
    ...state,
    fetch,
    plugins: state.result
  }
}