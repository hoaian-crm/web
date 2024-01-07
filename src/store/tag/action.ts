import { createAsyncThunk } from "@reduxjs/toolkit";
import TagService, { CreateTagBody } from "service/tag";

export const createTag = createAsyncThunk(
  "tags/create",
  (data: CreateTagBody, { rejectWithValue }) => {
    return TagService.createTag(data).catch(rejectWithValue);
  }
);

export const getTag = createAsyncThunk("tag/get", (_, { rejectWithValue }) => {
  return TagService.getTag().catch(rejectWithValue);
});
