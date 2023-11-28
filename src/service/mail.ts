import { apiPromiseHandler } from './index';
import { ApiCaller, Query, api } from "service";
import { IMail } from "type/email"

export type CreateMail = IMail;
export type CrateMailResponse = IMail;

export type QueryMail = Query<{ keyword: string }>;
export type FetchMailResponse = Array<IMail>;

namespace MailService {
  export const fetchMail: ApiCaller<FetchMailResponse> = (query: QueryMail) => {
    return apiPromiseHandler(api.get("/mails", { params: query }));
  }

  export const createMail: ApiCaller<CrateMailResponse> = (data: CreateMail) => {
    return apiPromiseHandler(api.post("/mails", data))
  }
}

export default MailService