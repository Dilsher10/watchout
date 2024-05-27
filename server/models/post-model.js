const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    dating: {
        type: String,
        required: true,
    },
    toxic: {
        type: String,
        required: true,
    },
    cheat: {
        type: String,
        required: true,
    },
    scam: {
        type: String,
        required: true,
    },
    ethnicity: {
        type: String,
        required: true,
    },
    nationality: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
},{
    timestamps: true,
})

const Post = new mongoose.model("posts", postSchema);
module.exports = Post;