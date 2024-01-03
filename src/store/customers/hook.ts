import { CreateCustomerBody, CustomerQuery } from "service/customer";
import { useAppDispatch, useAppSelector } from "store";
import { createCustomer, fetchCustomers } from "./actions";

export const useCustomers = () => {
  const state = useAppSelector((state) => state.customerReducer);
  const dispatch = useAppDispatch();

  const fetch = (query: CustomerQuery) => {
    return dispatch(fetchCustomers(query));
  };

  const create = async (data: CreateCustomerBody) => {
    return dispatch(createCustomer(data));
  };

  return {
    ...state,
    fetch,
    create,
  };
};
