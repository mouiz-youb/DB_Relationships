import prisma from "../utils/db.js"

const CreatePost =async(req,res)=>{
    const {title , content , authorId} = req.body
    // check if the fields are empty 
    if(!title || !content || !authorId){
        return res.status(400).json({
            msg:"All fields must required "
        })
    }
    try {
        const New_Post = await prisma.post.create({
            data:{
                title ,
                content , 
                authorId
            }
        })
        res.status(201).json({
            msg:"The post created seccussfully",
            New_Post
        })
    } catch (error) {
        res.status(500).json({
            msg:error.message
        })
    }
}
const UpdatePost =async(req,res)=>{
  const {title , content } = req.body
    // check if the fields are empty 
    if(!title || !content ){
        return res.status(400).json({
            msg:"All fields must required "
        })
    }
    try {
        const Updated_Post = await prisma.post.update({
            where :{
                id:Number(req.params.id)
            },
            data:{
                title ,
                content , 
            }
        })
        res.status(200).json({
            msg:"The post update seccussfully",
            Updated_Post
        })
    } catch (error) {
        res.status(500).json({
            msg:error.message
        })
    }
}
const DeletePost =async(req,res)=>{
    try {
        const Deleted_Post  = await prisma.post.delete({
            where: { id: Number(req.params.id) },
        })
        res.status(200).json({
            msg:"The post deleted  seccussfully",
            DeletePost
        })
    } catch (error) {
        res.status(500).json({
            msg:error.message
        })
    }
}
const ListPost =async(req,res)=>{
    try {
        const All_Post = await prisma.post.findMany({
            include:{
                author:true , comments:true
            }
        })
        res.status(200).json({
            msg:"The post listing  seccussfully",
            All_Post
        })
    } catch (error) {
        res.status(500).json({
            msg:error.message
        })
    }
}
export {CreatePost , UpdatePost,DeletePost , ListPost}