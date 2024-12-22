require("dotenv").config();
const express = require("express");
const app = express();
const errorMiddleware = require("./src/middleware/errorMiddleware");
const authRouter = require("./src/routes/authRouter");
const contactRouter = require("./src/routes/contactRouter");
const blogRouter = require("./src/routes/blogRouter");
const adminRouter = require("./src/routes/adminRoute");
const connectDb = require("./utils/db");
const cors = require("cors");
const PORT = process.env.PORT || 8008;


//tackeling cors
var corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
  }
   
//middleware

app.use(cors(corsOptions));
app.use(express.json());


app.get("/", (req,res)=>{
    res.send("hello");
})

//routers
app.use("/api/auth",authRouter);
app.use("/api/contact",contactRouter);
app.use("/api/blog",blogRouter);
app.use("/api/admin",adminRouter);

//error middleware
app.use(errorMiddleware);

//DB Connect
connectDb().then(()=>{
    app.listen(PORT , ()=>{
        console.log(`server is at ${PORT}`);
    })
});
