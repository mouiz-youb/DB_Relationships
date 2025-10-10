import  {useState} from 'react'
import { Link } from 'react-router-dom'
import { useLogin } from '../Hooks/useLogin'
function LoginPage() {
  const login  = useLogin()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const handleSubmit =async(e:any)=>{
    e.preventDefault()
    const user ={
      email  , password 
    }
    console.log(user)
    await login(email  , password)
  }
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <form onSubmit={handleSubmit} className=' w-1/2 p-5 flex justify-center items-center flex-col gap-5 border-[1px] border-black rounded-xl  '>
        <h1 className='text-5xl'>Login To ypu account  </h1>
        <input 
        onChange={(e)=>setEmail(e.target.value)}
        type="email" 
        className=' w-2/3 rounded-xl border-[1px] border-black px-3 py-1.5 '
        placeholder='Enter you Email' />
        <input 
        onChange={(e)=>setPassword(e.target.value)}
        type="password" 
        className=' w-2/3 rounded-xl border-[1px] border-black px-3 py-1.5 '
        placeholder='Enter you Password' />
        <button type="submit" className='cursor-pointer w-2/3 rounded-xl border-[1px] border-black px-3 py-1.5 '>Login</button>
        <p>if you don't have account signup  ?<Link to="/signup" className='text-blue-500'>signup</Link></p>
      </form>
    </div>
  )
}

export default LoginPage