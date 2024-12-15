const express = require("express");
const app = express();
const authRouter = require("./src/routes/authRouter");
const contactRouter = require("./src/routes/contactRouter");
const connectDb = require("./utils/db");
const PORT = 8008;

//middleware
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("hello");
})

//routers
app.use("/api/auth",authRouter);
app.use("/api/contact",contactRouter);

//DB Connect
connectDb().then(()=>{
    app.listen(PORT , ()=>{
        console.log(`server is at ${PORT}`);
    })
});
