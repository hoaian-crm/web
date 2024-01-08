import { createAsyncThunk } from "@reduxjs/toolkit";
import CustomerService, { CreateCustomerBody, CustomerQuery, DeleteCustomerBody, GetCustomerParam } from "service/customer";

export const fetchCustomers = createAsyncThunk(
  "customers/fetch",
  (query: CustomerQuery, { rejectWithValue }) => {
    return CustomerService.fetchCustomer(query).catch(rejectWithValue);
  }
);

export const getCustomer = createAsyncThunk(
  "customers/get",
  (param: GetCustomerParam, { rejectWithValue }) => {
    return CustomerService.getCustomer(param);
  }
)

export const createCustomer = createAsyncThunk("customers/create", (data: CreateCustomerBody, {rejectWithValue}) => {
  return CustomerService.createCustomer(data).catch(rejectWithValue)
})

export const deleteCustomer = createAsyncThunk("customers/delete", (data: DeleteCustomerBody, { rejectWithValue }) => {
  return CustomerService.deleteCustomers(data).catch(rejectWithValue)
})