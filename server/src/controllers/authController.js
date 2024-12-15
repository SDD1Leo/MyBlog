require("dotenv").config();
const User = require("../models/userModel")
const bcrypt = require("bcrypt");
const jwtGenerator = require("./jwtGenerator");

const home = async (req, res) => {
    try {
        res.send("hello router controller");
    } catch (error) {
        res.status(404).send({ "msg": "notfound" });
    }
}
//register
const register = async (req, res) => {
    try {
        //destruture req.body
        const { username, name, email, password, isAdmin } = req.body;
        //if user already exists in db
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(400).json({ msg: "user already exists." });
        }
        //hash the password
        // const saltrounds = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, 10);

        //load new user in db
        const userCreated = await User.create({
            username,
            name,
            email,
            password: hashPassword
        });
        //generate JWT
        const token = jwtGenerator(username, email, isAdmin);
        res.status(200).json({ msg: "user created successfully", token: token });


    } catch (error) {
        return res.status(500).json("internal server error");
    }
};

const login = async (req, res) => {
    try {
        //destructure
        const { email, password } = req.body;
        //if user exists or not
        const userExist = await User.findOne({ email: email });
        if (!userExist) {
            return res.status(401).json({ msg: "invalid user or paswword" });
        }
        //compare password
        const comparePassword = await bcrypt.compare(password, userExist.password);
        if (!comparePassword) {
            return res.status(401).json({ msg: "invalid user or password" });
        } else {
            res.status(200).json({
                msg: "user login successfull",
                token: await jwtGenerator(userExist.username, userExist.email, userExist.isAdmin)
            })
        }


    } catch (error) {
        return res.status(500).json("internal server error");
    }
};

module.exports = { home, register, login };