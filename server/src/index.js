import express from "express"
import cookieParser from "cookie-parser";
import http from "http"
import {Server} from "socket.io"
import PostRouter from "./router/PostRouter.js"
import AuthRouter from "./router/AuthRouter.js"
import CommentRouter from "./router/CommentsRouter.js"
import cors from "cors"
import { swaggerUi, swaggerSpec } from "./swagger.js";
import prisma from "./utils/db.js"
// -------------express server ------------------------
const app = express()
const Rest_PORT = 3000
app.use(
  cors({
    origin: "http://localhost:5173", // React client
    credentials: true, // allow cookies/authorization headers
  })
);

app.use(express.json())
app.use(cookieParser());
// routers for the apps 
app.use("/post",PostRouter)
app.use("/auth",AuthRouter)
app.use("/comment",CommentRouter)
// app.listen(Rest_PORT, ()=>{
//     console.log(`The Rest api  server is listen to port ${Rest_PORT}`)
// })
// ------------socket server------------------
const Socket_Port = 400   
// const server = http.createServer(app)
// const io = new Server(server , {
//     cors :{
//         origin:"http://localhost:5173",
//         method:["GET","POST"]
//     }
// })
// export {io}
// io.on("connection",(socket)=>{
//     console.log(`A user connected ${socket.id}`)
//     // listen for client msg 
//     socket.on("chat_msg",(msg)=>{
//         console.log(`Msg from client ${msg}`)
//         // send msg back to all connected clients 
//         io.emit("chat_msg",msg)
//     })
//     // handel disconnection
//     socket.on("disco ",()=>{
//         console.log(`User disconnected ${socket.id}`)
//     })
// })
// -------------swagger ui-----------------
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// ------------------------------
app.get("/",(req,res)=>{
    res.send(`hello from social media app`)
})

// io.listen(Socket_Port, ()=>{
//     console.log(`The  Socket.IO server is listen to port ${Socket_Port}`)
// })

// start server 
const StartServer =async()=>{
    try {
        console.log(`⏳ Checking database connection...`)
        await prisma.$connect()
        console.log("✅ Database connected successfully!");
        const PORT = process.env.PORT || 3000 
        app.listen(PORT , ()=>{
            console.log(`🚀 Server running on port ${PORT}`);
        })
    } catch (error) {
        console.log(`❌ Failed to connect to database`)
        console.error(error.message)
        await prisma.$disconnect()
        process.exit(1)
    }
}

StartServer()