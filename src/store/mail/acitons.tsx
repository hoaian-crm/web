import { createAsyncThunk } from "@reduxjs/toolkit";
import MailService, { CreateMail, QueryMail } from "service/mail";

export const fetchMail = createAsyncThunk(
  "mails/fetch",
  (query: QueryMail, { rejectWithValue }) => {
    return MailService.fetchMail(query).catch(rejectWithValue);
  }
);

export const createMail = createAsyncThunk(
  "mails/create",
  (data: CreateMail, { rejectWithValue }) => {
    return MailService.createMail(data).catch(rejectWithValue);
  }
);
