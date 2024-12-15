const express = require("express");
const app = express();
const router = require("./src/routes/authRouter");
const connectDb = require("./utils/db");
const PORT = 8008;

//middleware
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("hello");
})

//routers
app.use("/api/auth",router);

//DB Connect
connectDb().then(()=>{
    app.listen(PORT , ()=>{
        console.log(`server is at ${PORT}`);
    })
});
