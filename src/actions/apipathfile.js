import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://shop-now-api.onrender.com/api",
});
