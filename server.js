const express = require("express");
const app = express();

app.get("/hello",(req,res)=>{
    return res.send("Hi I'am from the sample EKS deployment !");
})

app.listen(3000,(req,res)=>{
    console.log("Server is running on port 3000");
})
