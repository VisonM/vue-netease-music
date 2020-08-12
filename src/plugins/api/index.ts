import ApiMap from "@/request/api.map";
import RequestFactory from "@/request/index";
import { AxiosRequestConfig } from "axios";
type ApiMapType<T> = {
  [key: string]: string | ApiMapType<T>;
};

type ApiModuleType<T> = {
  [key: string]: () => AxiosRequestConfig;
};

const apiConnect = () => {
  const module = {};
  const connectWrapper = (apiMap: ApiMapType<string>, apiModule) => {
    Object.keys(apiMap).map(moduleName => {
      if (apiMap[moduleName] && typeof apiMap[moduleName] === "object") {
        apiModule[moduleName] = {};
        connectWrapper(apiMap[moduleName], apiModule[moduleName]);
      } else {
        let url = apiMap[moduleName];
        url = url.charAt() === "/" ? url.substring(1) : url;
        apiModule[moduleName] = RequestFactory.bind(null, url);
      }
    });
  };
  connectWrapper(ApiMap, module);
  return module;
};

export default apiConnect();
