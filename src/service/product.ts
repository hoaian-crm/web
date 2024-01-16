import { ApiCaller, Query, api, apiPromiseHandler } from "service";
import { IProduct } from "type/product";

export type CreateProductBody = IProduct;
export type CreateProductResponse = IProduct;

export type FetchProductQuery = Query<{ keyword: string }>;
export type FetchProductResponse = Array<IProduct>;

export type DeleteProductQuery = { ids: Array<string | number> };
export type DelteProductResponse = null;

namespace ProductService {

  export const create: ApiCaller<CreateProductResponse> = (data: CreateProductBody) => {
    return apiPromiseHandler(api.post("/products", data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }));
  }

  export const fetch: ApiCaller<FetchProductResponse> = (query: FetchProductQuery) => {
    return apiPromiseHandler(api.get("/products", { params: query }));
  }

  export const softDelete: ApiCaller<DelteProductResponse> = (data: DeleteProductQuery) => {
    return apiPromiseHandler(api.delete('/products', { params: data }))
  }
}

export default ProductService;
