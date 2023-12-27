import {
  TopProductSaleResponse,
  TotalRevenueResponse,
} from "./../../service/sale";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Response } from "service";
import { TotalRevenueProductResponse } from "service/sale";
import { FetchStatus } from "type/api.d";
import {
  getTopProductSale,
  getTotalRevenue,
  getTotalRevenueProduct,
} from "./action";
import { TotalRevenue } from "routes/dashboard/components/total_revenue";

type State = {
  totalRevenueProduct: {
    status: FetchStatus;
    data: TotalRevenueProductResponse;
  };
  topProductSale: {
    status: FetchStatus;
    data: TopProductSaleResponse;
  };
  totalRevenue: {
    status: FetchStatus;
    data: TotalRevenueResponse;
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
  },
  totalRevenue: {
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
    builder.addCase(
      getTopProductSale.fulfilled,
      (state, action: PayloadAction<Response<TopProductSaleResponse>>) => {
        state.topProductSale.data = action.payload.data.result;
        state.topProductSale.status = FetchStatus.Success;
      }
    );
    builder.addCase(
      getTotalRevenue.fulfilled,
      (state, action: PayloadAction<Response<TotalRevenueResponse>>) => {
        state.totalRevenue.data = action.payload.data.result;
        state.totalRevenue.status = FetchStatus.Success;
      }
    );
  },
});

export const saleReducer = slice.reducer;
