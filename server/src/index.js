import express from "express"
import cookieParser from "cookie-parser";
import http from "http"
import {Server} from "socket.io"
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
// ------------socket server------------------
const server = http.createServer(app)
const io = new Server(server , {
    cors :{
        origin:"http://localhost:5173",
        method:["GET","POST"]
    }
})
io.on("connection",(socket)=>{
    console.log(`A user connected ${socket.id}`)
    // listen for client msg 
    socket.on("chat_msg",(msg)=>{
        console.log(`Msg from client ${msg}`)
        // send msg back to all connected clients 
        io.emit("chat_msg",msg)
    })
    // handel disconnection
    socket.on("disco ",()=>{
        console.log(`User disconnected ${socket.id}`)
    })
})
// ------------------------------

server.listen(PORT, ()=>{
    console.log(`🚀The server is listen to port ${PORT}`)
})