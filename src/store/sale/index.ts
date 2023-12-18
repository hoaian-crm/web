import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Response } from "service";
import { TotalRevenueProductResponse } from "service/sale";
import { FetchStatus } from "type/api.d";
import { getTotalRevenueProduct } from "./action";

type State = {
  totalRevenueProduct: {
    status: FetchStatus;
    data: TotalRevenueProductResponse;
  };
};
const initialState: State = {
  totalRevenueProduct: {
    status: FetchStatus.NoAction,
    data: [],
  },
};

const slice = createSlice({
  name: "sale",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getTotalRevenueProduct.fulfilled,
      (state, action: PayloadAction<Response<TotalRevenueProductResponse>>) => {
        state.totalRevenueProduct.data = action.payload.data.result;
        state.totalRevenueProduct.status = FetchStatus.Success;
      }
    );
  },
});


export const saleReducer = slice.reducer