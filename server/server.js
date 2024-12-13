const express = require("express");
const app = express();

const PORT = 8008;

app.get("/", (req,res)=>{
    res.send("hello");
})

app.listen(PORT , ()=>{
    console.log(`server is at ${PORT}`);
})