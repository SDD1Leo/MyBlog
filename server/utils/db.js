require("dotenv").config();
const mongoose = require("mongoose");


const connectDb = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected to db");

    } catch (error) {
        console.error("connection failed");
        process.exit(0);
    }
}

module.exports = connectDb;