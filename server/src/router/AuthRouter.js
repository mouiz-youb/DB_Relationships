import express from  "express"
import {LogInController , SignUpController} from "../controllers/AuthController.js"
const router = express.Router()

// signup router 
router.post("/signup" , SignUpController)
router.post("/login" , LogInController)
export default router 