import { ChartQuery } from "service/sale";
import { useAppDispatch, useAppSelector } from "store";
import { getTotalRevenueProduct } from "./action";

export const useSale = () => {
  const state = useAppSelector((state) => state.saleReducer);
  const dispatch = useAppDispatch();

  const _getTotalRevenueProduct = async (query: ChartQuery) => {
    return dispatch(getTotalRevenueProduct(query));
  };

  return {
    ...state,
    getTotalRevenueProduct: _getTotalRevenueProduct,
  };
};
