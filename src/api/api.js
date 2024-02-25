import axios from "axios";

// Create an instance of axios
const api = axios.create({
  baseURL: "http://webscm.vyapilogistics.com:8348",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
api.interceptors.request.use(
  function (config) {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      console.log("No token found");
      return Promise.reject(new Error("Invalid token"));
    }
    return config;
  },
  function (error) {
    console.log("Request error:", error);
    // Do something with request error
    return Promise.reject(error);
  }
);

export default api;
