import { createAsyncThunk } from "@reduxjs/toolkit";
import MailService, { QueryMail } from "service/mail";

export const fetchMail = createAsyncThunk(
  "mails/fetch",
  (query: QueryMail, { rejectWithValue }) => {
    return MailService.fetchMail(query).catch(rejectWithValue);
  }
);
