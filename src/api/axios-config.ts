import axios from "axios";

interface IRequestError {
  statusCode: number;
  message: string;
}

const axiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5"
});

axiosInstance.interceptors.request.use(config => {
  config.params = {
    appid: "06dee298355f1f7d3729482e959f8b95",
    ...config.params
  };
  return config;
});

axiosInstance.interceptors.response.use(res => res, (error): Promise<IRequestError> => {
  console.log("[Axios => ErrorInterceptor]", error);
  return Promise.reject({
    statusCode: error.response.status,
    message: error.toJSON().message
  });
});

export { IRequestError };

export default axiosInstance;