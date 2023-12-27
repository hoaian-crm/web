import { ApiCaller, api, apiPromiseHandler } from "service";

export type ChartQuery =
  | {
      from?: number;
      to?: number;
      limit?: number;
      timeUnit?: "day" | "week" | "month" | "year";
    }
  | URLSearchParams;
export type TotalRevenueProductResponse = Array<{
  revenue: number;
  name: string;
  time: number;
  id: number;
}>;

export type TopProductSaleResponse = Array<{
  total: number;
  amount: number;
  id: number;
  price: number;
  name: string;
  alias: string;
}>;

export type TotalRevenueResponse = Array<{
  revenue: number;
  label: string;
}>;

namespace SaleService {
  export const totalRevenueProduct: ApiCaller<TotalRevenueProductResponse> = (
    query: ChartQuery
  ) => {
    return apiPromiseHandler(
      api.get("/sales/total_revenue_by_product", { params: query })
    );
  };

  export const getTopProductSale: ApiCaller<TopProductSaleResponse> = (
    query: ChartQuery
  ) => {
    return apiPromiseHandler(
      api.get("/sales/top_total_sold_product", { params: query })
    );
  };

  export const getTotalRevenue: ApiCaller<TotalRevenueResponse> = (
    query: ChartQuery
  ) => {
    return apiPromiseHandler(
      api.get("/sales/total_revenue", { params: query })
    );
  };
}

export default SaleService;
