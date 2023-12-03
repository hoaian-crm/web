import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Response } from "service";
import { CreateTemplate, FetchMailResponse, FetchTemplateResponse, QueryMail, QueryTemplate } from "service/mail";
import { useAppDispatch, useAppSelector } from "store";
import { FetchStatus } from "type/api.d";
import { IMail } from "type/email";
import { ITemplate } from "type/template";
import { createTemplate, fetchMail, fetchTemplate } from "./acitons";

export type MailState = {
  mails: {
    total: number;
    result: Array<IMail>;
    status: FetchStatus,
  };
  templates: {
    total: number;
    result: Array<ITemplate>;
    status: FetchStatus
  }
};

const initialState: MailState = {
  mails: {
    total: 0,
    result: [],
    status: FetchStatus.NoAction,
  },
  templates: {
    total: 0,
    result: [],
    status: FetchStatus.NoAction
  },
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
        state.mails = {
          result: action.payload.data.result,
          total: action.payload.data.total,
          status: FetchStatus.Success
        }
      }
    );
    builder.addCase(fetchMail.pending, (state) => {
      state.mails.status = FetchStatus.Loading;
    });
    builder.addCase(fetchMail.rejected, (state) => {
      state.mails.status = FetchStatus.Failed;
    });

    // ------------------------ Create mail ------------


    // ------------------------ List template ---------------
    builder.addCase(fetchTemplate.fulfilled, (state, action: PayloadAction<Response<FetchTemplateResponse>>) => {
      state.templates = {
        result: action.payload.data.result,
        total: action.payload.data.total,
        status: FetchStatus.Success
      }
    })
    builder.addCase(fetchTemplate.rejected, (state, action: any) => {
      state.templates.status = FetchStatus.Failed
    })
    builder.addCase(fetchTemplate.pending, (state) => {
      state.templates.status = FetchStatus.Loading
    })

    // --------------------- Create Template ----------
    builder.addCase(createTemplate.fulfilled, (state, action) => {
      window.location.reload();
    })
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
    ...state.mails,
    fetch,
  };
};

export const useTemplate = () => {
  const state = useAppSelector(state => state.mailReducer);
  const dispatch = useAppDispatch();

  const fetch = async (query: QueryTemplate) => {
    return dispatch(fetchTemplate(query))
  }

  const create = async (data: CreateTemplate) => {
    return dispatch(createTemplate(data))
  }

  return {
    ...state.templates,
    fetch,
    create
  }
}
