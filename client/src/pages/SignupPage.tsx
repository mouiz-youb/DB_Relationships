import  {useState} from 'react'
import { Link } from 'react-router-dom'
import { UseSignup } from '../Hooks/useSignup'
function SignupPage() {
  const signup  = UseSignup()
  const [username, setUsename] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const handleSubmit =async(e:any)=>{
    e.preventDefault()
    const user ={
      email , username , password 
    }
    console.log(user)
    await signup(email , username , password)
  }
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <form onSubmit={handleSubmit} className=' w-1/2 p-5 flex justify-center items-center flex-col gap-5 border-[1px] border-black rounded-xl  '>
        <h1 className='text-5xl'>Create Account for Signup </h1>
        <input 
        onChange={(e)=>setUsename(e.target.value)}
        type="text" 
        className=' w-2/3 rounded-xl border-[1px] border-black px-3 py-1.5 '
        placeholder='Enter you UserName' />
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
        <button type="submit" className='cursor-pointer w-2/3 rounded-xl border-[1px] border-black px-3 py-1.5 '>Signup</button>
        <p>if you account login ?<Link to="/login" className='text-blue-500'>Login</Link></p>
      </form>
    </div>
  )
}

export default SignupPage