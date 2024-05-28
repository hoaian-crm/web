import { BaseResponse, instance } from './axios';

export namespace Upload {
  // Default upload file
  export type Body = {
    type: string;
    file: File; // NOTE: Upload latter
  };
  export type Response = BaseResponse<{
    etag: string;
    versionId?: string | null;
    publicUrl: string;
  }>;
  export const uploadFile = async (data: Body) => {
    const formData = new FormData();
    formData.append('type', data.type);
    formData.append('file', data.file);

    return instance.post<Response>('/upload', formData);
  };
}
