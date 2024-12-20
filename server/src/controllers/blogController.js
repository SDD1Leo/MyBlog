const Myblog = require("../models/blogModel");

const blog = async (req,res)=>{
    try {
        const content = await Myblog.find();

        if (!content) {
            res.status(400).json({msg:"no blog found"});
        }

        res.status(200).json(content);

    } catch (error) {
        res.status(401).json({msg:"error at blog api"})
    }

}

module.exports = { blog };