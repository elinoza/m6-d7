const express =require('express')
const server = express()
const cors= require("cors")
const services =require("./services")
server.use(express.json())

server.use("/api", services)
server.use(cors())

const port = process.env.PORT|| 5000;
server.listen(port,()=>{
    console.info('Server is runnin on port:'+port)
})
server.on("error",(error)=>{
    console.error('error: serves is not running' +error )
})

