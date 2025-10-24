import prisma from "../utils/db.js"
// import {io} from "../index.js"
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

        // 🔥emit event to all clients 
        // io.emit("commentCreated",New_Comment)
        res.status(201).json({
            msg:"Comment created successfully",
            comment :{
                id :New_Comment.id,
                content:New_Comment.content,
                postId :New_Comment.postId,
                author:{
                    username :New_Comment.author.username,
                    email:New_Comment.author.email
                }
            }
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
    // check if the postId if exist or not 
    if(!postId){
        return res.status(400).json({
            msg:"PostId parameter is require "
        })
    }
    const PostIdIsNumber = Number(postId)
    if(Number.isNaN(PostIdIsNumber)){
        return res.status(400).json({
            msg:"postId must be a number try again"
        })
    }
    try {
        const All_Comments =await  prisma.comment.findMany({
            where:{postId:PostIdIsNumber}, // <- filter by postId 
            include:{author:{
                select:{
                    username:true,
                    email:true
                }
            }}, // Include author insfo
            orderBy:{createAt:"desc"} // optionnal :newest first
        })
        const formattedComments = All_Comments.map(comment => ({
            id: comment.id,
            content: comment.content,
            createAt: comment.createAt,
            postId: comment.postId,
            author: {
                username: comment.author.username,
                email: comment.author.email
            }
    }));
        res.json({
            msg:"Comments lisling successfully ",
            count: formattedComments.length,
            comments: formattedComments
        })
    } catch (error) {
         res.status(500).json({ msg: "Error fetching comments", error: error.message });
    }
}
export {CreateComment , UpdateComment , DeleteComment , ListComment}