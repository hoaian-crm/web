import { createAsyncThunk } from "@reduxjs/toolkit";
import CustomerService, { CustomerQuery } from "service/customer";

export const fetchCustomers = createAsyncThunk(
  "customers/fetch",
  (query: CustomerQuery, { rejectWithValue }) => {
    return CustomerService.getCustomer(query).catch(rejectWithValue);
  }
);
