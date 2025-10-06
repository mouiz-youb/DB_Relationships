import prisma from "../utils/db.js"
//  "content":"comment one for the post one ",
//     "postId":1
const CreateComment =async(req,res)=>{
    const {content , postId }= req.body
    try {
        const userId = req.user.id
        // Make sure req.user exists
        if (!req.user || !req.user.id) {
        return res.status(401).json({ msg: "Unauthorized: no user found" })
        }
        const New_Comment= await prisma.comment.create({
            data:{
                content , 
                postId:Number(postId),
                authorId:Number(userId)
            } ,
            include: {
                author: true, // so you can see user info too
                post: true
            }
        })
        res.status(201).json({
            msg:"Comment created successfully",
            New_Comment
        })
    } catch (error) {
        res.status(500).json({ msg: "Error creating comment", error: error.message });
    }

}
const UpdateComment =async(req,res)=>{
    const {content}= req.body
    const {id}= req.params
    try {
        const Updated_Comment= prisma.comment.update({
            where:{id:parseInt(id)},
            data:{content }
        })
        res.status(201).json({
            msg:"Comment created successfully", 
            Updated_Comment
        })
    } catch (error) {
        es.status(500).json({ msg: "Error Updating comment", error: error.message });
    }
}
const DeleteComment =async(req,res)=>{
    const  {id}= res.params 
    try {
        await prisma.comment.delete({
            where:{id:parseInt(id)}
        })
        res.json({ msg: "Comment deleted successfully" });
    } catch (error) {
        res.status(500).json({ msg: "Error deleting comment", error: error.message });
    }
}
const ListComment =async(req,res)=>{
    const {postId}= req.params
    try {
        const All_Commnets = prisma.comment.findMany({
            where:{id :parseInt(postId)},
            include:{author:true}
        })
        res.json({
            msg:"Comments lisling successfully ",
            All_Commnets
        })
    } catch (error) {
         res.status(500).json({ msg: "Error fetching comments", error: error.message });
    }
}
export {CreateComment , UpdateComment , DeleteComment , ListComment}