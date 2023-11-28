import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FetchStatus } from "type/api.d";
import { IMail } from "type/email";
import { fetchMail } from "./acitons";
import { FetchMailResponse, QueryMail } from "service/mail";
import { Response } from "service";
import { useAppDispatch, useAppSelector } from "store";

export type MailState = {
  data: {
    total: number;
    offset: number;
    limit: number;
    result: Array<IMail>;
  };
  status: FetchStatus;
};

const initialState: MailState = {
  data: {
    total: 0,
    offset: 0,
    limit: 0,
    result: [],
  },
  status: FetchStatus.NoAction,
};

const slice = createSlice({
  name: "mails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ----------------------------- Fetch mail -------------------
    builder.addCase(
      fetchMail.fulfilled,
      (state, action: PayloadAction<Response<FetchMailResponse>>) => {
        state.data = action.payload.data;
        state.status = FetchStatus.Success;
      }
    );
    builder.addCase(fetchMail.pending, (state) => {
      state.status = FetchStatus.Loading;
    });
    builder.addCase(fetchMail.rejected, (state) => {
      state.status = FetchStatus.Failed;
    });

    // ------------------------ Create mail ------------
  },
});
export const mailReducer = slice.reducer;

export const useMail = () => {
  const state = useAppSelector((state) => state.mailReducer);
  const dispatch = useAppDispatch();

  const fetch = async (query: QueryMail) => {
    return dispatch(fetchMail(query));
  };

  return {
    ...state,
    fetch,
  };
};
