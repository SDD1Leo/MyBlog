const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    img: {
        type: String,
        require: true,
    },
    header: {
        type: String,
        require: true,
    },
    text: {
        type: String,
        require: true,
    },
    link: {
        type: String,
        require: true,
    },
})

const Myblog = new mongoose.model('Myblog',blogSchema);
module.exports = Myblog;