import axios from "axios"
import  {toast} from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import  {useAuthStore} from "../Store/UserStore"
export const UseLogin =()=>{
    const navigate = useNavigate()
    const setAuth= useAuthStore((state)=>state.setAuth)
    const login =async(email:String , password:String)=>{
        try {
            const response = await axios.post("http://localhost:3000/auth/login",{
                email , password 
            })
            const msg = response.data.msg 
            if(msg === "No account found with this email. Please sign up first"){
                toast.error(msg)
            }
            if(msg === "All fields are required"){
                toast.error(msg)
            }
            const userData ={
                email :response.data.user.email,
                id : response.data.user.id,
                username: response.data.user.username
            }
            const accessToken = response.data.accessToken
            localStorage.setItem("userDataEmail", userData.email)
            localStorage.setItem("accessToken", accessToken)
            setAuth(userData,accessToken)
            if(msg ==="Login successfully"){
                toast.success(msg)
                navigate("/post")
                // setAuth(userData )
            }
        } catch (error :any) {
            const errMsg = error.response?.data?.msg || "Signup failed";
            toast.error(errMsg);
            throw error;
        }
    }
    return login 
}