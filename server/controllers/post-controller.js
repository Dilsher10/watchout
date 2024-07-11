const Post = require("../models/post-model");


// Create

const post = async (req, res) => {
    try {
        const { name, gender, dob, city, state, country, phone, email, dating, alertType, ethnicity, nationality, description} = req.body;
        const userPosted = await Post.create({ name, image: req.file.filename, gender, dob, city, state, country, phone, email, dating, alertType, ethnicity, nationality, description});
        if (userPosted) {
            res.status(201).json({ message: "Posted Successfully" });
        }
    } catch (error) {
        res.status(500).json("internal server errorr");
    }
};



// Read All

const read = async (req, res) => {
    try {
        const postData = await Post.find({});
        res.send(postData);
    } catch (error) {
        res.status(500).json("internal server errorr");
    }
};



module.exports = { post, read };    