import { createAsyncThunk } from "@reduxjs/toolkit";
import PluginService, { PluginQuery } from "service/plugin";

export const fetchPlugin = createAsyncThunk("plugins/fetch", (query: PluginQuery, {rejectWithValue}) => {
  return PluginService.fetchPlugin(query).catch(rejectWithValue)
})