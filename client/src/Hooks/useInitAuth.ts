import { useEffect } from "react";
import api from "../lib/api"
import UserStore from "../Store/UserStore"
export const useInitAuth =()=>{
    const clearAuth  = UserStore((STATE)=>STATE.clearAuth )
    const setAuth = UserStore((STATE)=>STATE.setAuth)
    useEffect(()=>{
        const initialize = async ()=>{
            try {
                const response = await api.post("/auth/refresh")
                const {user , accessToken }= response.data
                setAuth(user , accessToken)
            } catch (error) {
                clearAuth()
            }
        }
        initialize()
    },[setAuth , clearAuth])
}