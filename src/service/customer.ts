import { ApiCaller, Query, api, apiPromiseHandler } from "service";
import { ICustomer } from "type/customer";

// Fetch
export type CustomerQuery = Query<{ keyword?: string }>;
export type FetchCustomerResponse = Array<ICustomer>;

// Get Detail
export type GetCustomerParam = { customerId: string; };
export type GetCustomerResponse = ICustomer;

// Create
export type CreateCustomerBody = ICustomer;
export type CreateCustomerResponse = ICustomer;

// Update
export type UpdateCustomerBody = ICustomer;
export type UpdateCustomerResponse = ICustomer;


// Delete
export type DeleteCustomerBody = {
  ids: Array<number | string>
}

namespace CustomerService {

  export const fetchCustomer: ApiCaller<FetchCustomerResponse> = (
    query: CustomerQuery
  ) => {
    return apiPromiseHandler(api.get("/customers", { params: query }));
  };

  export const getCustomer: ApiCaller<GetCustomerResponse> = (param: GetCustomerParam) => {
    return apiPromiseHandler(api.get(`/customers/${param.customerId}`));
  }

  export const createCustomer: ApiCaller<CreateCustomerResponse> = (
    data: CreateCustomerBody
  ) => {
    return apiPromiseHandler(api.post("/customers", data));
  };

  export const deleteCustomers: ApiCaller = (data: DeleteCustomerBody) => {
    return apiPromiseHandler(api.delete('/customers', { data }))
  }

}

export default CustomerService;
