import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
});



export const configs = {
  baseURL: process.env.REACT_APP_BASE_API_URL,
};

export const axiosFetch = (addHeadersToRequest = true) => {
  const YOUR_TOKEN = localStorage.getItem("hotelBookSystemJWT");

  axiosInstance.interceptors.request.use(
    (config) => {
      config.headers["Authorization"] = `Bearer ${YOUR_TOKEN}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  if(addHeadersToRequest){
    return axiosInstance
  }
  return axios
};
