import axios from "axios";
import router from "@/router";
import { removeAccesstoken } from "@/utils";

const Axios = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

Axios.interceptors.request.use(
  (defaultConfig) => {
    const token = localStorage.getItem("access-token");

    defaultConfig.headers.Authorization = `Bearer ${token}`;

    return defaultConfig;
  },
  (error) => Promise.reject(error)
);

Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const response = error?.response;

    if (response && response?.status === 401) {
      removeAccesstoken();
      router.push("Login");

      return Promise.reject(new Error("Unauthorized"));
    }

    if (response && response?.status) {
      return response;
    }

    return Promise.reject(error);
  }
);

export default Axios;
