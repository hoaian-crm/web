import { createAsyncThunk } from "@reduxjs/toolkit";
import SaleService, { ChartQuery } from "service/sale";

export const getTotalRevenueProduct = createAsyncThunk(
  "sales/total_revenue_by_product",
  (query: ChartQuery, { rejectWithValue }) => {
    return SaleService.totalRevenueProduct(query).catch(rejectWithValue);
  }
);

export const getTopProductSale = createAsyncThunk(
  "sales/get_top_product_sale",
  (query: ChartQuery, { rejectWithValue }) => {
    return SaleService.getTopProductSale(query).catch(rejectWithValue);
  }
);
