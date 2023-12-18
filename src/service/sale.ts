import { ApiCaller, api, apiPromiseHandler } from "service";

export type ChartQuery =
  | {
      from: number;
      to: number;
      timeUnit: "day" | "week" | "month" | "year";
    }
  | URLSearchParams;
export type TotalRevenueProductResponse = Array<{
  revenue: number;
  name: string;
  time: number;
  id: number;
}>;

namespace SaleService {
  export const totalRevenueProduct: ApiCaller<TotalRevenueProductResponse> = (
    query: ChartQuery
  ) => {
    return apiPromiseHandler(
      api.get("/sales/total_revenue_by_product", { params: query })
    );
  };
}

export default SaleService;
