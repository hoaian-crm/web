import { ApiCaller, api, apiPromiseHandler } from "service";
import { IResourceTag, ITag } from "type/tag";

export type GetTagResponse = Array<ITag>;

export type CreateTagBody = {
  key: string;
  color: string;
  description: string;
};
export type CreateTagResponse = ITag;

export type AttachTagBody = {
  key: string;
  value: string;
  resource: string;
  resource_ids: Array<string | number>;
};
export type AttachTagResponse = IResourceTag

namespace TagService {
  export const getTag: ApiCaller<GetTagResponse> = () => {
    return apiPromiseHandler(api.get("/tags"));
  };

  export const createTag: ApiCaller<CreateTagResponse> = (
    data: CreateTagBody
  ) => {
    return apiPromiseHandler(api.post("/tags", data));
  };

  export const attachTag: ApiCaller<AttachTagResponse> = (data: AttachTagBody) => {
    return apiPromiseHandler(api.post("/tags/attach", data));
  };
}

export default TagService;
