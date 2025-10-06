import prisma from "../utils/db.js"
const CreateComment =async(req,res)=>{
    const {content , postId }= req.body
    try {
        const userId = req.user.id
        const New_Comment= prisma.comment.create({
            data:{
                content , 
                postId:parseInt(postId),
                authorId:userId
            } 
        })
        res.status(201).json({
            msg:"Comment created successfully",
            New_Comment
        })
    } catch (error) {
        es.status(500).json({ msg: "Error creating comment", error: error.message });
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