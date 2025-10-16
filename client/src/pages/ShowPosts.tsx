import  { useEffect } from 'react'
import useAuthStore from "../Store/UserStore";
import { useInitAuth } from '../Hooks/useInitAuth'; 
function ShowPosts() {
  const user = useAuthStore((state)=>state.user)
  useInitAuth()
  console.log(user)
  return (
    <div className='flex justify-center items-center flex-col gap-5  text-2xl'>
      <h1>show post </h1>
      <h1> user Email :{user?.email} </h1>
      <h1> user id  :{user?.id} </h1>
      <h1> user name :{user?.username} </h1>
      <h1></h1>
      <h1></h1>
    </div>
  )
}

export default ShowPosts


// import { useEffect } from "react";
// import { useAuth } from "../../Zustend-store/AuthStore.js";
// export const useInitializeAuth = () => {
//   const login = useAuth((state) => state.login);
//   const logout = useAuth((state) => state.logout);
//   useEffect(() => {
//     const storeUser = JSON.parse(localStorage.getItem("userData"));
//     const storeToken = JSON.parse(localStorage.getItem("token"));
//     if (storeUser && storeToken) {
//       login(storeUser);
//     } else {
//       logout();
//     }
//   }, [login, logout]);
// };