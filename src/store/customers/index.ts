import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Response } from "service";
import { FetchCustomerResponse } from "service/customer";
import { fetchCustomers } from "./actions";
import { FetchStatus } from "type/api.d";

type State = {
  fetch: {
    limit: number;
    offset: number;
    result: FetchCustomerResponse;
    status: FetchStatus;
  };
};

const initialState: State = {
  fetch: {
    limit: 0,
    offset: 0,
    result: [],
    status: FetchStatus.NoAction,
  },
};

const slice = createSlice({
  name: "customer",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Async method
    builder.addCase(
      fetchCustomers.fulfilled,
      (state, action: PayloadAction<Response<FetchCustomerResponse>>) => {
        state.fetch.result = action.payload.data.result;
        state.fetch.limit = action.payload.data.limit;
        state.fetch.offset = action.payload.data.offset;
        state.fetch.status = FetchStatus.Success;
      }
    );
  },
});

export const customerReducer = slice.reducer;
