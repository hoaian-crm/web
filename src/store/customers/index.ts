import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Response } from "service";
import {
  CreateCustomerResponse,
  FetchCustomerResponse,
} from "service/customer";
import { createCustomer, fetchCustomers } from "./actions";
import { FetchStatus } from "type/api.d";
import { ICustomer } from "type/customer";
import { CreateCustomerForm } from "routes/customer/components/form";
import { errorHandler } from "common/error";

type State = {
  customers: {
    limit: number;
    offset: number;
    result: FetchCustomerResponse;
    status: FetchStatus;
    total: number;
  };
  createCustomer: {
    data?: ICustomer;
    status: FetchStatus;
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
  createCustomer: {
    data: undefined,
    status: FetchStatus.NoAction,
  },
};

const slice = createSlice({
  name: "customer",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch customers
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

    // Create customers
    builder.addCase(
      createCustomer.fulfilled,
      (state, action: PayloadAction<Response<CreateCustomerResponse>>) => {
        state.createCustomer.data = action.payload.data.result;
        state.createCustomer.status = FetchStatus.Success;
      }
    );
    builder.addCase(createCustomer.pending, (state) => {
      state.createCustomer.status = FetchStatus.Loading;
    });
    builder.addCase(createCustomer.rejected, (state, action: any) => {
      state.createCustomer.status = errorHandler(action);
    });
  },
});

export const customerReducer = slice.reducer;
