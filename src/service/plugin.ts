import { ApiCaller, Query, api, apiPromiseHandler } from "service";
import { IPlugin } from "type/plugin"


export type PluginQuery = Query<{keyword: string}>;
export type FetchPluginResponse = Array<IPlugin>;

namespace PluginService {
  export const fetchPlugin: ApiCaller<FetchPluginResponse> = (query: PluginQuery) => {
    return apiPromiseHandler(api.get("/plugins/", {params: query}))
  }
}

export default PluginService