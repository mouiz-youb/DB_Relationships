import express from  "express"
import {LogInController , SignUpController , Logout , refreshToken} from "../controllers/AuthController.js"
const router = express.Router()

// signup router 
router.post("/signup" , SignUpController)
router.post("/login" , LogInController)
router.post("/logout" , Logout)
router.post("/refreshToken" , refreshToken)
export default router 