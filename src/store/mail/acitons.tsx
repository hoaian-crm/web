import { createAsyncThunk } from "@reduxjs/toolkit";
import MailService, { QueryMail, QueryTemplate } from "service/mail";

export const fetchMail = createAsyncThunk(
  "mails/fetch",
  (query: QueryMail, { rejectWithValue }) => {
    return MailService.fetchMail(query).catch(rejectWithValue);
  }
);

export const fetchTemplate = createAsyncThunk(
  "templates/fetch",
  (query: QueryTemplate, { rejectWithValue }) => {
    return MailService.fetchTemplate(query).catch(rejectWithValue)
  }
)

export const createTemplate = createAsyncThunk("templates/create", (data: FormData, { rejectWithValue }) => {
  return MailService.createTemplate(data).catch(rejectWithValue)
})