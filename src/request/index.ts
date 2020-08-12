import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 1000,
  headers: { "X-Custom-Header": "Vision_X" }
});

instance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    const { code } = error.response.data;
    switch (code) {
      case 301:
        console.log(error.response.data.msg);
        break;
    }
    return Promise.reject(error.response);
  }
);

const requestFactory = (url: string, options: AxiosRequestConfig = {}) => {
  const { method = "post", ...rest } = options;
  return instance.request({
    url,
    method,
    data: {
      ...rest
    }
  });
};

export default requestFactory;
