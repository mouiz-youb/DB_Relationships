import express from "express"
import {CreatePost , UpdatePost,DeletePost , ListPost}  from "../controllers/PostControllers.js"
const router = express.Router()
// create post 
router.post("/create", CreatePost)
// update post 
router.put("/update/:id", UpdatePost)

// delete post 
router.delete("/delete/:id", DeletePost)

// list all post 
router.get("/list", ListPost)
export  default router 