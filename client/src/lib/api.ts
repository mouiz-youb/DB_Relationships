import axios from "axios"
import {useAuthStore} from "../Store/UserStore"
import { useNavigate } from "react-router-dom"

// const navigate  = useNavigate()

// axios instence 
const api = axios.create({
    baseURL:"http://localhost:3000",
    withCredentials:true // allow cookies 
})
// attach access token auto 
api.interceptors.request.use((config)=>{
    const accessToken = useAuthStore((state)=>state.accessToken)
    // const token = useAuthStore.getState().accessToken
    if(accessToken) config.headers.Authorization = `Bearer ${accessToken}`
    return config 
})

// auto refresh on 401 Unauthorized
api.interceptors.response.use(
    (res)=>res ,
    async (error)=>{
        const navigate  = useNavigate()
        const originalRequest = error.config
        if(error.response?.status === 401 && !originalRequest._retry){
            originalRequest._retry = true
            try {
                const refreshRes = await api.post("/auth/refreshToken")
                const {accessToken , user}= refreshRes.data
                // update the zustand store 
                const setAuth = useAuthStore((state)=>state.setAuth)
                setAuth(user, accessToken)
                // retry orginal request with new token 
                originalRequest.headers.Authorization = `Bearer ${accessToken}`
                return api(originalRequest)
            } catch (refreshErr) {
                console.error("token refresh failed :", refreshErr)
                  const clearAuth = useAuthStore((state)=>state.clearAuth)
                clearAuth()
                window.location.href = "/login"
            }
        }
        return Promise.reject(error)
    }
)
export default api