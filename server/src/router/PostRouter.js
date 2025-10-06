import express from "express"
import requireToken  from "../middleware/authMiddleware.js"
import {CreatePost , UpdatePost,DeletePost , ListPost}  from "../controllers/PostControllers.js"
const router = express.Router()
// create post 
router.post("/create",requireToken, CreatePost)
// update post 
router.put("/update/:id",requireToken, UpdatePost)

// delete post 
router.delete("/delete/:id",requireToken , DeletePost)

// list all post 
router.get("/list", ListPost)
export  default router 