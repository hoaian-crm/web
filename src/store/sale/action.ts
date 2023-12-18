import { createAsyncThunk } from "@reduxjs/toolkit";
import SaleService, { ChartQuery } from "service/sale";

export const getTotalRevenueProduct = createAsyncThunk(
  "sales/total_revenue_product",
  (query: ChartQuery, { rejectWithValue }) => {
    return SaleService.totalRevenueProduct(query).catch(rejectWithValue);
  }
);
