import { createAsyncThunk } from "@reduxjs/toolkit";
import CustomerService, { CreateCustomerBody, CustomerQuery } from "service/customer";

export const fetchCustomers = createAsyncThunk(
  "customers/fetch",
  (query: CustomerQuery, { rejectWithValue }) => {
    return CustomerService.getCustomer(query).catch(rejectWithValue);
  }
);

export const createCustomer = createAsyncThunk("customers/create", (data: CreateCustomerBody, {rejectWithValue}) => {
  return CustomerService.createCustomer(data).catch(rejectWithValue)
})