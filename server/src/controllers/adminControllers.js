const User = require("../models/userModel");
const Contact = require("../models/contactModel");
const Myblog = require("../models/blogModel");


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

const deleteUserById = async(req,res)=>{
    const adminData = req.user;
    if (adminData.isAdmin) {
        try {
            const id = req.params.id;
            await User.deleteOne({email : id})
            return res.status(201).json({message:"user deleted successfully."});
        } catch (error) {
            res.status(400).json({message:"delete user by id error"})
        }
    } else {
        res.status(404).json({message:"Unauthorized Access"})
    }
    

}

const myblog = async(req,res) => {
    const adminData = req.user;
    if (adminData.isAdmin) {
        try {
            //destructure
            const { img , header , text } = req.body;
            //put in db
            const blogCreated = Myblog.create({
                img:img,
                header:header,
                text:text,
            });
            res.status(200).json("blog created successfully");
        } catch (error) {
            res.status(400).json({message:"blog adding error"})
        }
    } else {
        res.status(404).json({message:"Unauthorized Access"})
    }
}

const deletemyblog = async(req,res) =>{
    const adminData = req.user;
    if (adminData.isAdmin) {
        try {
            const id = req.params.id;
            await Myblog.deleteOne({_id:id})
            return res.status(200).json("blog deleted successfully");
        } catch (error) {
            res.status(400).json({message:"blog deleting error"})
        }
    } else {
        res.status(404).json({message:"Unauthorized Access"})
    }
}

module.exports = { users, contacts ,deleteUserById , myblog , deletemyblog};