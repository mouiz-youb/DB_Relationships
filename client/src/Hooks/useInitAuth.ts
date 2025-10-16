import { useEffect } from "react";
import UserStore from "../Store/UserStore"
export const useInitAuth =()=>{
    const user = UserStore((STATE)=>STATE.user)
    const setAuth = UserStore((STATE)=>STATE.setAuth)
    useEffect(()=>{
        const storedUser = localStorage.getItem("user") 
        const storedToken = localStorage.getItem("accesToken")
        if(storedToken && storedUser){
            const persetUser = JSON.parse(storedUser)
            setAuth(persetUser , storedToken)
        }
    },[setAuth])
}