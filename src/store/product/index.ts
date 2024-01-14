import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CreateProductResponse, FetchProductQuery, FetchProductResponse } from "service/product";
import { FetchStatus } from "type/FetchStatus";
import { IProduct } from "type/product";
import { createProduct, fetchProduct } from "./action";
import { Response } from "service";
import { errorHandler } from "common/error";

type State = {
  products: Array<IProduct>;
  createdProduct?: IProduct;
  fetchStatus: FetchStatus;
  createStatus: FetchStatus;
  query: FetchProductQuery;
}

const initialState: State = {
  products: [],
  fetchStatus: FetchStatus.NoAction,
  createStatus: FetchStatus.NoAction,
  query: {
    limit: "10",
    offset: "0",
    keyword: ""
  }
}

const slice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Create Product
    builder.addCase(createProduct.fulfilled, (state, action: PayloadAction<Response<CreateProductResponse>>) => {
      state.createStatus = FetchStatus.Success;
      state.createdProduct = action.payload.data.result;
    })
    builder.addCase(createProduct.pending, (state) => {
      state.createStatus = FetchStatus.Loading;
    })
    builder.addCase(createProduct.rejected, (state, action: any) => {
      state.createStatus = errorHandler(action);
    })

    // Fetch Product
    builder.addCase(fetchProduct.fulfilled, (state, action: PayloadAction<Response<FetchProductResponse>>) => {
      state.products = action.payload.data.result;
      state.fetchStatus = FetchStatus.Success;
    })
    builder.addCase(fetchProduct.pending, (state) => {
      state.fetchStatus = FetchStatus.Loading;
    })
    builder.addCase(fetchProduct.rejected, (state, action: any) => {
      state.fetchStatus = errorHandler(action);
    })
  }
})

export const productReducer = slice.reducer;
