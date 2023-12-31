import { ApiCaller, Query, api, apiPromiseHandler } from "service";
import { ICustomer } from "type/customer";

// Fetch
export type CustomerQuery = Query<{ keyword?: string }>;
export type FetchCustomerResponse = Array<ICustomer>;

// Create
export type CreateCustomerBody = ICustomer;
export type CreateCustomerResponse = ICustomer;

// Update
export type UpdateCustomerBody = ICustomer;
export type UpdateCustomerResponse = ICustomer;

namespace CustomerService {
  export const getCustomer: ApiCaller<FetchCustomerResponse> = (
    query: CustomerQuery
  ) => {
    return apiPromiseHandler(api.get("/customers", { params: query }));
  };

  export const createCustomer: ApiCaller<CreateCustomerResponse> = (
    data: CreateCustomerBody
  ) => {
    return apiPromiseHandler(api.post("/customers", data));
  };
}

export default CustomerService;
