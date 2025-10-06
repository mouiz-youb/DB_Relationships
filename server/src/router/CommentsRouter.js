import express from "express"
import requireToken from "../middleware/authMiddleware.js"
import {CreateComment , UpdateComment , DeleteComment , ListComment} from "../controllers/CommentsController.js"
const router = express.Router()
// create post 
router.post("/create",requireToken, CreateComment)
// update post 
router.put("/update/:id",requireToken, UpdateComment)

// delete post 
router.delete("/delete/:id",requireToken , DeleteComment)

// list all post 
router.get("/list", ListComment)
export default router 