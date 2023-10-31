import axios, { AxiosError, AxiosResponse } from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "",
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = "Bearer " + localStorage["accessToken"];
  return config;
});

export type Message = {
  code: number;
  description: string;
  field: string;
  meta_data: any;
};

export type Query<T> =
  | ({
      limit?: string;
      offset?: string;
      sort?: string;
    } & T)
  | URLSearchParams;

export type Response<T> = {
  messages: Array<Message>;
  data: {
    result: T;
    total: number;
    limit: number;
    offset: number;
  };
};

export const serializeQuery = (search: URLSearchParams) => {
  return {
    limit: search.get("limit") || "10",
    offset: search.get("offset") || "0",
    sort: search.get("sort") || "",
  };
};

export const responseParser = <T extends any>(
  response: AxiosResponse
): Response<T> => {
  return response.data;
};

export const errorParser = (error: AxiosError): Response<any> => {
  return error.response?.data as Response<any>;
};

export const apiPromiseHandler = <T>(
  promise: Promise<AxiosResponse>
): Promise<Response<T>> => {
  return new Promise((resolve, reject) => {
    promise
      .then((result) => {
        resolve(responseParser<T>(result));
      })
      .catch((err) => {
        reject(errorParser(err));
      });
  });
};

export type ApiCaller<T> = (...params: any[]) => Promise<Response<T>>;

export const UnknownMessage: Message = {
  code: 0,
  description: "Unexpected error !",
  field: "",
  meta_data: {},
};
