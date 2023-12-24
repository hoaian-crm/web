import { TopProductSaleResponse } from "./../../service/sale";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Response } from "service";
import { TotalRevenueProductResponse } from "service/sale";
import { FetchStatus } from "type/api.d";
import { getTopProductSale, getTotalRevenueProduct } from "./action";

type State = {
  totalRevenueProduct: {
    status: FetchStatus;
    data: TotalRevenueProductResponse;
  };
  topProductSale: {
    status: FetchStatus;
    data: TopProductSaleResponse;
  };
};
const initialState: State = {
  totalRevenueProduct: {
    status: FetchStatus.NoAction,
    data: [],
  },
  topProductSale: {
    status: FetchStatus.NoAction,
    data: [],
  }
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
    builder.addCase(
      getTopProductSale.fulfilled,
      (state, action: PayloadAction<Response<TopProductSaleResponse>>) => {
        state.topProductSale.data = action.payload.data.result;
        state.topProductSale.status = FetchStatus.Success;
      }
    );
  },
});

export const saleReducer = slice.reducer;
