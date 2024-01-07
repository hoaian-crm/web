import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FetchStatus } from "type/FetchStatus";
import { IResourceTag, ITag } from "type/tag";
import { createTag, getTag } from "./action";
import { CreateTagResponse, GetTagResponse } from "service/tag";
import { Response } from "service";
import { errorHandler } from "common/error";

type State = {
  fetch: {
    result: GetTagResponse;
    status: FetchStatus;
  };
  create: {
    result?: ITag;
    status: FetchStatus;
  };
};

const initialState: State = {
  fetch: {
    result: [],
    status: FetchStatus.NoAction,
  },
  create: {
    status: FetchStatus.NoAction,
  },
};

const slice = createSlice({
  name: "tag",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch tag
    builder.addCase(
      getTag.fulfilled,
      (state, action: PayloadAction<Response<GetTagResponse>>) => {
        state.fetch.status = FetchStatus.Success;
        state.fetch.result = action.payload.data.result;
      }
    );
    builder.addCase(getTag.pending, (state) => {
      state.fetch.status = FetchStatus.Loading;
    });

    // Create tag
    builder.addCase(createTag.pending, (state) => {
      state.create.status = FetchStatus.Loading;
    });
    builder.addCase(
      createTag.fulfilled,
      (state, action: PayloadAction<Response<CreateTagResponse>>) => {
        state.create.status = FetchStatus.Success;
        state.create.result = action.payload.data.result;
      }
    );
    builder.addCase(createTag.rejected, (state, action: any) => {
      state.create.status = FetchStatus.Failed;
      errorHandler(action);
    });
  },
});

export const tagReducer = slice.reducer;
