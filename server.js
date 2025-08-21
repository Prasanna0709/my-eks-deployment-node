const express = require("express");
const app = express();

app.get("/hello",(req,res)=>{
    return res.send("Hi I'am from the sample EKS deployment !");
})

app.listen(3000,(req,res)=>{
    console.log("Server is running on port 3000");
})

/*

subnet-04bf7fe19d695166c
subnet-0e73e913fb8369fc1
subnet-0c4e0d7572653a22e

// woker ode

*/