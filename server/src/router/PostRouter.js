import express from "express"
import requireToken  from "../middleware/authMiddleware.js"
import {CreatePost , UpdatePost,DeletePost , ListPost}  from "../controllers/PostControllers.js"
const router = express.Router()
/**
 * @swagger
 * tags:
 *   name: Posts
 *   description: API for managing posts
 */

/**
 * @swagger
 * /post/list:
 *   get:
 *     summary: Get all posts
 *     tags: [Posts]
 *     responses:
 *       200:
 *         description: List of posts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 */

/**
 * @swagger
 * /post/create:
 *   post:
 *     summary: Create a new post
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *                 example: "My First Post"
 *               content:
 *                 type: string
 *                 example: "This is the content of my first post."
 *     responses:
 *       201:
 *         description: Created post
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 */

/**
 * @swagger
 * /post/update/{id}:
 *   put:
 *     summary: Update a post by ID
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the post to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Updated Post Title"
 *               content:
 *                 type: string
 *                 example: "Updated post content"
 *     responses:
 *       200:
 *         description: Post updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 */

/**
 * @swagger
 * /post/delete/{id}:
 *   delete:
 *     summary: Delete a post by ID
 *     tags: [Posts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the post to delete
 *     responses:
 *       200:
 *         description: Post deleted successfully
 */
 

// create post 
router.post("/create",requireToken, CreatePost)
// update post 
router.put("/update/:id",requireToken, UpdatePost)

// delete post 
router.delete("/delete/:id",requireToken , DeletePost)

// list all post 
router.get("/list", ListPost)
export  default router 