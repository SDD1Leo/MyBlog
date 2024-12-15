const Contact = require("../models/contactModel");

const home = async (req, res) => {
    try {
        res.send("hello router contact controller");
    } catch (error) {
        res.status(404).send({ "msg": "notfound" });
    }
};

const message = async(req,res) => {
    try {
        const createMessage = await Contact.create(req.body);
        res.status(200).json({msg:"message sent successfully."});

    } catch (error) {
        res.status(400).json({msg:"server error"})
    }
};

module.exports = { home , message };