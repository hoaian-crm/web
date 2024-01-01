import { CustomerQuery } from "service/customer";
import { useAppDispatch, useAppSelector } from "store";
import { fetchCustomers } from "./actions";

export const useCustomers = () => {
  const state = useAppSelector((state) => state.customerReducer);
  const dispatch = useAppDispatch();

  const fetch = (query: CustomerQuery) => {
    return dispatch(fetchCustomers(query));
  };

  const create = () => {
    throw new Error("handle latter");
  };

  return {
    ...state,
    fetch,
    create,
  };
};
