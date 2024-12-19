const express = require("express");
const router = express.Router();
// const {home,register} = require("../controllers/authController");....can use this
const authControllers = require("../controllers/authController");
const { signupSchema , signinSchema } = require("../models/validators/authValidators");
const validate = require("../middleware/validateMiddleware");
const authMiddleware = require("../middleware/authMiddleware");


// router.get("/",(req,res)=>{
//     res.send("hello router")
// });

//mounter controller on routes
router.route("/").get(authControllers.home);
router.route("/register").post(validate(signupSchema),authControllers.register);
router.route("/login").post(validate(signinSchema),authControllers.login);
router.route("/user").get(authMiddleware,authControllers.user);

module.exports = router;
