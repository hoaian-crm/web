import { ChartQuery } from "service/sale";
import { useAppDispatch, useAppSelector } from "store";
import {
  getTopProductSale,
  getTotalRevenue,
  getTotalRevenueProduct,
} from "./action";

export const useSale = () => {
  const state = useAppSelector((state) => state.saleReducer);
  const dispatch = useAppDispatch();

  const _getTotalRevenueProduct = async (query: ChartQuery) => {
    return dispatch(getTotalRevenueProduct(query));
  };

  const formatTotalRevenue = () => {
    let result: {
      [productName: string]: {
        [col: string]: number;
      };
    } = {};
    state.totalRevenueProduct.data.map((data) => {
      if (!result[data.name]) result[data.name] = {};
      result[data.name][data.time] = data.revenue;
    });
    return result;
  };

  const _getTopProductSale = async (query: ChartQuery) => {
    return dispatch(getTopProductSale(query));
  };

  const _getTotalRevenue = async (query: ChartQuery) => {
    return dispatch(getTotalRevenue(query));
  };

  return {
    ...state,
    getTotalRevenueProduct: _getTotalRevenueProduct,
    getTopProductSale: _getTopProductSale,
    getTotalRevenue: _getTotalRevenue,
    formatTotalRevenue,
  };
};
