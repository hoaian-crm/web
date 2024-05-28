import Axios from 'axios';

export const instance = Axios.create({
  baseURL: 'https://api.relationc.com'
});

export type BaseResponse<T> = {
  messages: Array<{ code: number; description: string }>;
  data: {
    result: T;
    total: number;
  };
};
