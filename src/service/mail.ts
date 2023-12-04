import { ApiCaller, Query, api } from "service";
import { IMail } from "type/email";
import { ITemplate } from "type/template";
import { apiPromiseHandler } from "./index";

export type CreateMail = IMail;
export type CreateMailResponse = IMail;

export type QueryMail = Query<{ keyword: string }>;
export type FetchMailResponse = Array<IMail>;

export type QueryTemplate = Query<{ keyword?: string }>;
export type FetchTemplateResponse = Array<ITemplate>;

export type CreateTemplate = any;
export type CreateTemplateResponse = ITemplate;

namespace MailService {
  export const fetchMail: ApiCaller<FetchMailResponse> = (query: QueryMail) => {
    return apiPromiseHandler(api.get("/mails", { params: query }));
  };

  export const createMail: ApiCaller<CreateMailResponse> = (
    data: CreateMail
  ) => {
    return apiPromiseHandler(api.post("/mails", data));
  };

  export const fetchTemplate: ApiCaller<FetchTemplateResponse> = (
    query: QueryTemplate
  ) => {
    return apiPromiseHandler(api.get("/templates", { params: query }));
  };

  export const createTemplate: ApiCaller<CreateTemplateResponse> = (
    data: CreateTemplate
  ) => {
    return apiPromiseHandler(api.post("/templates", data));
  };
}

export default MailService;
