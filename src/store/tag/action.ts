import { createAsyncThunk } from "@reduxjs/toolkit";
import TagService, { AttachTagBody, CreateTagBody, DeleteTagParam, UpdateTagBody } from "service/tag";

export const createTag = createAsyncThunk(
  "tags/create",
  (data: CreateTagBody, { rejectWithValue }) => {
    return TagService.createTag(data).catch(rejectWithValue);
  }
);

export const getTag = createAsyncThunk("tag/get", (_, { rejectWithValue }) => {
  return TagService.getTag().catch(rejectWithValue);
});

export const attachTag = createAsyncThunk("tag/attach", (data: AttachTagBody, { rejectWithValue }) => {
  return TagService.attachTag(data).catch(rejectWithValue)
})

export const updateTag = createAsyncThunk('tag/update', (data: UpdateTagBody, { rejectWithValue }) => {
  return TagService.updateTag(data).catch(rejectWithValue);
})

export const deleteTag = createAsyncThunk("tag/delete", (param: DeleteTagParam, { rejectWithValue }) => {
  return TagService.deleteTag(param);
})
