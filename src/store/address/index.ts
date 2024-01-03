import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Response } from "service";
import { SearchAddressResponse } from "service/address";
import { IAddress } from "type/address";
import { FetchStatus } from "type/api.d";
import { searchAddress } from "./action";

type State = {
  autoComplete: {
    result: Array<IAddress>;
    status: FetchStatus;
  }
}


const initialState: State = {
  autoComplete: {
    result: [],
    status: FetchStatus.NoAction
  }
}

const slice = createSlice({
  name: "address",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchAddress.fulfilled, (state, action: PayloadAction<Response<SearchAddressResponse>>) => {
      state.autoComplete.result = action.payload.data.result;
      state.autoComplete.status = FetchStatus.Success;
    })
    builder.addCase(searchAddress.pending, (state) => {
      state.autoComplete.status = FetchStatus.Loading;
    })
  }
})

export const addressReducer = slice.reducer;