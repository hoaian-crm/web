import { Update } from "@reduxjs/toolkit";
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

export type UpdateTagBody = ITag;
export type UpdateTagResponse = ITag; // Tag after update

export type DeleteTagParam = { key: string };
export type DeleteTagResponse = {};

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

  export const updateTag: ApiCaller<UpdateTagBody> = (data: UpdateTagBody) => {
    return apiPromiseHandler(api.put(`/tags/${data.key}`, data))
  }

  export const deleteTag: ApiCaller<DeleteTagParam> = (param: DeleteTagParam) => {
    return apiPromiseHandler(api.delete(`/tags/${param.key}`));
  }
}

export default TagService;
