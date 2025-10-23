import axios from "axios"
import {useAuthStore} from "../Store/UserStore"
// import { useNavigate } from "react-router-dom"

// const navigate  = useNavigate()

// axios instence 
const api = axios.create({
    baseURL:"http://localhost:3000",
    withCredentials:true // allow cookies 
})
// attach access token auto 
api.interceptors.request.use((config) => {
  const { accessToken } = useAuthStore.getState();
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

// auto refresh on 401 Unauthorized
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshRes = await api.post("/auth/refresh"); // backend endpoint
        const { accessToken, user } = refreshRes.data;

        const { setAuth } = useAuthStore.getState();
        setAuth(user, accessToken);

        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (refreshErr) {
        console.error("Token refresh failed:", refreshErr);
        useAuthStore.getState().clearAuth();
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);
export default api