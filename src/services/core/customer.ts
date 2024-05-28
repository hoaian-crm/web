import { ICustomer } from 'types/customer';
import { Pagination } from 'types/pagination';
import { BaseResponse, instance } from './axios';

export namespace Customer {
  export type Query = Pagination & {
    keyword?: string;
    isDeleted?: 'true' | 'false';
  };

  export type QueryResponse = BaseResponse<Array<ICustomer>>;
  export const fetch = (query: Query) => {
    return instance.get<QueryResponse>('/customers', {
      params: query
    });
  };

  export type CreateBody = ICustomer;
  export type CreateResponse = BaseResponse<ICustomer>;
  export const create = (body: CreateBody) => {
    return instance.post<CreateResponse>('/customers', body);
  };

  // export type UpdateBody = Partial<ICustomer> & { id: string };
  // export type UpdateResponse = BaseResponse<ICustomer>;
  // export const update = (body: UpdateBody) => {
  //   return instance.put<UpdateResponse>('/customer');
  // }

  export type DeleteBody = { ids: Array<number | string> };
  export type DeleteResponse = BaseResponse<null>;
  export const remove = (body: DeleteBody) => {
    return instance.delete('/customers', {
      data: body
    });
  };
}
