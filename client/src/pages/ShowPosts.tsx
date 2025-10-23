import useAuthStore from "../Store/UserStore";
import { useInitAuth } from '../Hooks/useInitAuth'; 
import { Link } from 'react-router-dom';
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
      <Link to="/createPost">createPost</Link>
    </div>
  )
}

export default ShowPosts


