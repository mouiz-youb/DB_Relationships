import { useState } from "react"
import {UseCreatePost} from "../Hooks/useCreatePost"
function CreatePost() {
  const createPost = UseCreatePost()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const handleSumbit =async(e:any)=>{
    e.preventDefault()
    await createPost(title , content)
  }
  return (
    <div className='w-full h-full flex justify-center items-center flex-col gap-3 '>
      <h1 className="text-5xl">Create Post </h1>
      <form onSubmit={handleSumbit} className="flex justify-center items-center flex-col gap-5 rounded-3xl w-1/2 h-1/2 border-[1px] border-black">
        <input 
        onChange={(e)=>setTitle(e.target.value)}
        placeholder="Enter Post Title " className="w-2/3 px-2 py-1 border-[1px] border-black rounded-xl" type="text" />
        <input 
        onChange={(e)=>setContent(e.target.value)}
        placeholder="Enter Post Content " className="w-2/3 px-2 py-1 border-[1px] border-black rounded-xl" type="text" />
        <button type="submit" className="w-2/3 px-2 py-1 border-[1px] border-black rounded-xl cursor-pointer">Create</button>
      </form>
    </div>
  )
}

export default CreatePost