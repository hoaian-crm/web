import axios, { AxiosError, AxiosResponse } from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "",
  headers: {
    Authorization: "Bearer " + localStorage["access_token"],
  },
});

export type Message = {
  code: number;
  description: string;
  field: string;
  meta_data: any;
};

export type Response<T> = {
  messages: Array<Message>;
  data: {
    result: T;
  };
  total: number;
  limit: number;
  offset: number;
};

export const responseParser = <T extends any>(
  response: AxiosResponse
): Response<T> => {
  return response.data;
};

export const errorParser = (error: AxiosError): Response<any> => {
  console.log("error when parser is:", error);
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
