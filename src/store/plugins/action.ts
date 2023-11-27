import { createAsyncThunk } from "@reduxjs/toolkit";
import PluginService, { CreatePlugin, PluginQuery } from "service/plugin";

export const fetchPlugin = createAsyncThunk(
  "plugins/fetch",
  (query: PluginQuery, { rejectWithValue }) => {
    return PluginService.fetchPlugin(query).catch(rejectWithValue);
  }
);

export const createPlugin = createAsyncThunk(
  "plugins/create",
  (data: CreatePlugin, { rejectWithValue }) => {
    return PluginService.createPlugin(data).catch(rejectWithValue);
  }
);
