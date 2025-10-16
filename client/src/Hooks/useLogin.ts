import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import api from "../lib/api";
// import axios from "axios";
import useAuthStore from "../Store/UserStore";

export const useLogin = () => {
  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post("/auth/login", { email, password });
      const msg = response.data.msg;

      if (msg === "No account found with this email. Please sign up first") {
        toast.error(msg);
        return;
      }
      if (msg === "All fields are required") {
        toast.error(msg);
        return;
      }

      const userData = response.data.user;
      const accessToken = response.data.accessToken;

      if (msg === "Login successful") {
        toast.success(msg);
        setAuth(userData, accessToken);
        console.log(userData , accessToken)
        navigate("/listPosts");
      }
    } catch (error: any) {
      const errMsg = error.response?.data?.msg || "Login failed";
      toast.error(errMsg);
    }
  };

  return login;
};
