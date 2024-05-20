import axios from "axios";
import { API_URL } from "../utils/constants";

const api = axios.create({
  baseURL: API_URL,
  timeout: 5000, // thời gian hết hạn request
  headers: { "Content-Type": "application/json" },
});

// Can thiep vao qua trinh request len server
api.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("employerToken");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Can thiep vao qua trinh server gui response ve client
api.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
