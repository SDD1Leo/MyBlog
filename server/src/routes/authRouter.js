const express = require("express");
const router = express.Router();
// const {home,register} = require("../controllers/authController");....can use this
const authControllers = require("../controllers/authController");
const { signupSchema , signinSchema } = require("../models/validators/authValidators");
const validate = require("../middleware/validateMiddleware");


// router.get("/",(req,res)=>{
//     res.send("hello router")
// });

//mounter controller on routes
router.route("/").get(authControllers.home);
router.route("/register").post(validate(signupSchema),authControllers.register);
router.route("/login").post(validate(signinSchema),authControllers.login);

module.exports = router;
