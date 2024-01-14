import { ApiCaller, Query, api, apiPromiseHandler } from "service";
import { IProduct } from "type/product";

export type CreateProductBody = IProduct;
export type CreateProductResponse = IProduct;

export type FetchProductQuery = Query<{ keyword: string }>;
export type FetchProductResponse = Array<IProduct>;

namespace ProductService {

  export const create: ApiCaller<CreateProductResponse> = (data: CreateProductBody) => {
    return apiPromiseHandler(api.post("/products", data));
  }

  export const fetch: ApiCaller<FetchProductResponse> = (query: FetchProductQuery) => {
    return apiPromiseHandler(api.get("/products", { params: query }));
  }
}

export default ProductService;
