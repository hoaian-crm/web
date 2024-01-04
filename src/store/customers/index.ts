import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { errorHandler } from "common/error";
import { Response } from "service";
import {
  CreateCustomerResponse,
  FetchCustomerResponse
} from "service/customer";
import { FetchStatus } from "type/FetchStatus";
import { ICustomer } from "type/customer";
import { createCustomer, deleteCustomer, fetchCustomers } from "./actions";

type State = {
  customers: {
    result: FetchCustomerResponse;
    status: FetchStatus;
    total: number;
  };
  createCustomer: {
    data?: ICustomer;
    status: FetchStatus;
  };
  deleteCustomer: {
    status: FetchStatus;
  };
  selectedCustomer: Array<string | number>
};

const initialState: State = {
  customers: {
    result: [],
    status: FetchStatus.NoAction,
    total: 0,
  },
  createCustomer: {
    data: undefined,
    status: FetchStatus.NoAction,
  },
  deleteCustomer: {
    status: FetchStatus.NoAction
  },
  selectedCustomer: [],
};

const slice = createSlice({
  name: "customer",
  initialState: initialState,
  reducers: {
    selectCustomer: (state, action: PayloadAction<Array<string | number>>) => {
      state.selectedCustomer = action.payload;
    }
  },
  extraReducers: (builder) => {
    // Fetch customers
    builder.addCase(
      fetchCustomers.fulfilled,
      (state, action: PayloadAction<Response<FetchCustomerResponse>>) => {
        state.customers.result = action.payload.data.result;
        state.customers.status = FetchStatus.Success;
        state.customers.total = action.payload.data.total;
      }
    );
    builder.addCase(fetchCustomers.pending, (state) => { state.customers.status = FetchStatus.Loading })

    // Create customer
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

    // Delete customers
    builder.addCase(deleteCustomer.fulfilled, (state) => {
      state.deleteCustomer.status = FetchStatus.Success
    })
    builder.addCase(deleteCustomer.pending, (state) => {
      state.deleteCustomer.status = FetchStatus.Loading
    })
  },
});

export const customerReducer = slice.reducer;
export const { selectCustomer } = slice.actions;