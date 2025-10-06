import express from "express"
import cookieParser from "cookie-parser";
import PostRouter from "./router/PostRouter.js"
import AuthRouter from "./router/AuthRouter.js"
import CommentRouter from "./router/CommentsRouter.js"
const app = express()
const PORT = 3000  
app.use(express.json())
app.use(cookieParser());
// routers for the apps 
app.use("/post",PostRouter)
app.use("/auth",AuthRouter)
app.use("/comment",CommentRouter)
// ------------------------------
app.listen(PORT, ()=>{
    console.log(`The server is listen to port ${PORT}`)
})