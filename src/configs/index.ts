
import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  // You can set other default configurations here
});

// Assuming you have the token stored somewhere
const YOUR_TOKEN = localStorage.getItem("hotelBookSystemJWT")

axiosInstance.interceptors.request.use(
  config => {
    // Assign the Authorization header to every request
    config.headers['Authorization'] = `Bearer ${YOUR_TOKEN}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance


export const configs = {
  baseURL: process.env.REACT_APP_BASE_API_URL
}
