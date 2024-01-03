import { createAsyncThunk } from "@reduxjs/toolkit";
import AddressService, { SearchAddress } from "service/address";

export const searchAddress = createAsyncThunk("address/search", async (query: SearchAddress, { rejectWithValue }) => {
  return await AddressService.searchAddress(query).catch(rejectWithValue)
})