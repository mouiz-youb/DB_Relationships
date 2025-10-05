import express from "express"
const app = express()
const PORT = 3000 
app.get("/test",(req,res)=>{
    res.send(`Hello from test `)
})
app.listen(PORT, ()=>{
    console.log(`The server is listen to port ${PORT}`)
})