// axios.js or api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://mycyster-backend.onrender.com/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor to include token in headers if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token"); // or sessionStorage
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default api;
