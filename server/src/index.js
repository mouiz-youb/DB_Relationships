import express from "express"
import PostRouter from "./router/PostRouter.js"
import AuthRouter from "./router/AuthRouter.js"
const app = express()
app.use(express.json())
app.use("/post",PostRouter)
app.use("/auth",AuthRouter)
const PORT = 3000 
app.get("/test",(req,res)=>{
    res.send(`Hello from test `)
})
app.listen(PORT, ()=>{
    console.log(`The server is listen to port ${PORT}`)
})