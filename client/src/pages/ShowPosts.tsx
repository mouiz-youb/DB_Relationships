import React, { useEffect } from 'react'
import useAuthStore from "../Store/UserStore"; 
function ShowPosts() {
  const user = useAuthStore((state)=>state.user)
  const loadAuthFromStorage = useAuthStore((state)=>state.loadAuthFromStorage)
   useEffect(() => {
    loadAuthFromStorage()
  }, [])
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