const express = require("express");
const app = express();
const router = require("./src/routes/authRouter");
const PORT = 8008;

//middleware
app.use(express.json());
app.get("/", (req,res)=>{
    res.send("hello");
})

//routers
app.use("/api/auth",router);

app.listen(PORT , ()=>{
    console.log(`server is at ${PORT}`);
})