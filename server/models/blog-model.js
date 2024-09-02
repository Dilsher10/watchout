const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    image: {
        type: String
    },
    title: {
        type: String
    },
    content: {
        type: String
    }
}, {
    timestamps: true,
})

const Blog = new mongoose.model("blogs", blogSchema);
module.exports = Blog;