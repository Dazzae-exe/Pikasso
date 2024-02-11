import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_URL_PIKASSO_API,
  timeout: 1000,
  headers: {
    Authorization: `Client-ID ${import.meta.env.VITE_AUTHORIZATION_KEY}`,
    "Accept-Version": "v1",
  },
});
