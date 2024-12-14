const express = require("express");
const router = express.Router();
// const {home,register} = require("../controllers/authController");....can use this
const authControllers = require("../controllers/authController");


// router.get("/",(req,res)=>{
//     res.send("hello router")
// });

//mounter controller on routes
router.route("/").get(authControllers.home);
router.route("/register").post(authControllers.register);

module.exports = router;
