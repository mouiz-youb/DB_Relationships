import  {toast} from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import api from "../lib/api"
// import  {useAuthStore} from "../Store/UserStore"
export const UseSignup =()=>{
    const navigate = useNavigate()
    // const setAuth= useAuthStore((state)=>state.setAuth)
    const signup =async(email:String , username:String , password:String)=>{
        try {
            const response = await api.post("/auth/signup",{
                username , email , password 
            })
            const msg = response.data.msg 
            if(msg === "User already existe try with another email"){
                toast.error(msg)
            }
            if(msg === "All fields are required"){
                toast.error(msg)
            }
            // const userData ={
            //     email :response.data.NewUser.email,
            //     id : response.data.NewUser.id,
            //     username: response.data.NewUser.username
            // }
            if(msg ==="User registered successfully"){
                toast.success(msg)
                navigate("/login")
                // setAuth(userData )
            }
        } catch (error :any) {
            const errMsg = error.response?.data?.msg || "Signup failed";
            toast.error(errMsg);
            throw error;
        }
    }
    return signup 
}