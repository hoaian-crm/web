import { ApiCaller, api, apiPromiseHandler } from "service";
import { Address } from "type/address";

export type SearchAddress = {
  input: string;
}
export type SearchAddressResponse = Array<Address>

namespace AddressService {
  export const searchAddress: ApiCaller<SearchAddressResponse> = (query: SearchAddress) => {
    return apiPromiseHandler(api.get("/address/search", {params: query}));
  }
}

export default AddressService;