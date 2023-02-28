import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "http://www.anjishop.me/api",
});
