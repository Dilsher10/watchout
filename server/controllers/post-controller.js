const Post = require("../models/post-model");


// Create

const post = async (req, res) => {
    try {
        const { name, gender, dob, city, state, country, phone, email, dating, alertType, ethnicity, nationality, description } = req.body;

        const today = new Date();
        const birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();

        const userPosted = await Post.create({ name, image: req.file.filename, gender, dob, age, city, state, country, phone, email, dating, alertType, ethnicity, nationality, description });
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



// Search

const search = async (req, res) => {
    try {
        const { country, alertType, gender, ethnicity, dating, age } = req.body;

        let ageFilter = {};
        if (age) {
            const [minAge, maxAge] = age.split(' - ');
            ageFilter = {
                age: {
                    $gte: parseInt(minAge),
                    $lte: parseInt(maxAge)
                }
            };
        }

        const filters = {
            ...(country && { country }),
            ...(alertType && { alertType }),
            ...(gender && { gender }),
            ...(ethnicity && { ethnicity }),
            ...(dating && { dating }),
            ...ageFilter
        };
        const alerts = await Post.find(filters);
        if (alerts.length === 0) {
            res.status(404).json({ message: "Record not found" });
        } else {
            res.json(alerts);
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



module.exports = { post, read, search };    