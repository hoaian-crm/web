import { useParams } from "hooks/useParams";
import { CreateCustomerBody, CustomerQuery, DeleteCustomerBody, GetCustomerParam } from "service/customer";
import { useAppDispatch, useAppSelector } from "store";
import { selectCustomer } from ".";
import { createCustomer, deleteCustomer, fetchCustomers, getCustomer } from "./actions";

export const useCustomers = () => {
  const state = useAppSelector((state) => state.customerReducer);
  const dispatch = useAppDispatch();
  const [query, setQuery] = useParams({
    limit: "30",
    offset: "0",
    keyword: ""
  })

  const fetch = (query: CustomerQuery) => {
    return dispatch(fetchCustomers(query));
  };

  const getDetail = (param: GetCustomerParam) => {
    return dispatch(getCustomer(param))
  }

  const create = async (data: CreateCustomerBody) => {
    await dispatch(createCustomer(data));
    await dispatch(fetchCustomers(query))
  };

  const remove = async (data: DeleteCustomerBody) => {
    await dispatch(deleteCustomer(data))
    await dispatch(fetchCustomers(query))
  };

  const removeSelected = async () => {
    await dispatch(deleteCustomer({
      ids: state.selectedCustomer
    }))
    await dispatch(fetchCustomers(query))
    select([])
  }

  const select = (data: Array<string | number>) => {
    dispatch(selectCustomer(data));
  }

  return {
    ...state,
    fetch,
    create,
    remove,
    query,
    setQuery,
    select,
    removeSelected,
    getDetail
  };
};
