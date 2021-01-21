const express = require("express");

const server = express();

const cors  = require("cors")

const services = require("./services")

server.use(express.json())


// get all routes and put under api , so you access all routes as host:port/api/routename


server.use("/",services)



server.use(cors())

const port = process.env.PORT || 5000;

server.listen(port,()=>{
    console.info(' ✅  Server is running on port ' + port )
});


server.on("error",(error)=>{
    console.error(' ❌ Error : server is not running :  ' + error )
});