const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    name: {
        type: String
    },
    image: {
        type: String
    },
    gender: {
        type: String
    },
    dob: {
        type: String
    },
    age: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    country: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    dating: {
        type: String
    },
    alertType: {
        type: String
    },
    ethnicity: {
        type: String
    },
    nationality: {
        type: String
    },
    description: {
        type: String
    }
},{
    timestamps: true,
})

const Post = new mongoose.model("posts", postSchema);
module.exports = Post;