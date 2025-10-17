import api from "../lib/api"
import { useNavigate } from "react-router-dom"
import  {toast} from "react-hot-toast"
export const UseCreatePost =()=>{
    const  navigate = useNavigate()
    const createPost =async(title :String , content:String)=>{
        try {
            const response =await api.post("/post/create" , {title , content})
            const msg = response.data.msg
            if(msg ==="The post created seccussfully"){
                toast.success(msg)
                navigate("/listPosts")
            }
        } catch (error:any) {
            const errMsg = error.response?.data?.msg || "Signup failed";
            toast.error(errMsg)
            throw error 
        }
    }
    return createPost
}