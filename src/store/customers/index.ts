import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Response } from "service";
import { FetchCustomerResponse } from "service/customer";
import { fetchCustomers } from "./actions";
import { FetchStatus } from "type/api.d";

type State = {
  customers: {
    limit: number;
    offset: number;
    result: FetchCustomerResponse;
    status: FetchStatus;
    total: number;
  };
};

const initialState: State = {
  customers: {
    limit: 0,
    offset: 0,
    result: [],
    status: FetchStatus.NoAction,
    total: 0,
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
        state.customers.result = action.payload.data.result;
        state.customers.limit = action.payload.data.limit;
        state.customers.offset = action.payload.data.offset;
        state.customers.status = FetchStatus.Success;
        state.customers.total = action.payload.data.total;
      }
    );
  },
});

export const customerReducer = slice.reducer;
