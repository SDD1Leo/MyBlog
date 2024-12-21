const User = require("../models/userModel");
const Contact = require("../models/contactModel");


const users = async(req,res) => {
    const adminData = req.user;
    if (adminData.isAdmin) {
        try {
            const userData = await User.find({},{password:0});
            if (!userData || userData.length === 0) {
                res.status(404).json({message:"users not found"})
            }else{
                res.status(200).json(userData);
            }
    
        } catch (error) {
            res.status(500).json({message:"admin user controller error"})
        }
    } else {
        res.status(404).json({message:"Unauthorized Access"})
    }
    
}

const contacts = async(req,res) => {
    const adminData = req.user;
    if (adminData.isAdmin) {
        try {
            const contactData = await Contact.find();
            if (!contactData || contactData.length === 0) {
                res.status(404).json({message:"contacts not found"})
            }else{
                res.status(200).json(contactData);
            }
    
        } catch (error) {
            res.status(500).json({message:"admin contact controller error"})
        }
    } else {
        res.status(404).json({message:"Unauthorized Access"})
    }
    
}

module.exports = { users, contacts };