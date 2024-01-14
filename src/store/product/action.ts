import { createAsyncThunk } from "@reduxjs/toolkit";
import ProductService, { CreateProductBody, FetchProductQuery } from "service/product";

export const fetchProduct = createAsyncThunk("product/fetch", (query: FetchProductQuery, { rejectWithValue }) => {
  return ProductService.fetch(query).catch(rejectWithValue)
})

export const createProduct = createAsyncThunk("product/create", (data: CreateProductBody, { rejectWithValue }) => {
  return ProductService.create(data).catch(rejectWithValue)
})
