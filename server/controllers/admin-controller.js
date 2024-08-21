const Admin = require("../models/admin-model");
const Review = require("../models/review-model");
const Blog = require("../models/blog-model");



// Register Controller

const register = async (req, res) => {
    try {
        const { name, phone, email, password } = req.body;
        const adminExist = await Admin.findOne({ email });
        if (adminExist) {
            return res.status(400).json({ message: "Email already exists" });
        }
        const adminCreated = await Admin.create({ name, phone, email, password });
        res.status(201).json({ message: "Register Successfully", token: await adminCreated.generateToken(), userId: adminCreated._id.toString() });
    } catch (error) {
        res.status(500).json("internal server error");
    }
};





// Login Controller

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const adminExist = await Admin.findOne({ email });
        if (adminExist) {
            if (password === adminExist.password) {
                res.status(200).json({ message: "Login Successfully", token: await adminExist.generateToken(), userId: adminExist._id.toString() });
            }
            else {
                res.status(401).json({ error: "Invalid Input" });
            }
        }
        else {
            res.status(401).json({ error: "Email not exists" });
        }
    } catch (error) {
        res.status(500).json("internal server error");
    }
}


// Reviews

const read = async (req, res) => {
    try {
        const reviewData = await Review.find({});
        res.send(reviewData);
    } catch (error) {
        res.status(500).json("internal server errorr");
    }
};


// View Review

const viewReview = async (req, res) => {
    try {
        const id = req.params.id;
        const reviewData = await Review.findOne({ _id: id });
        res.send(reviewData);
    } catch (error) {
        res.status(500).json("internal server errorr");
    }
};



// Approve Review

const approveReview = async (req, res) => {
    try {
        const user = await Review.findOne({ _id: req.params.id });

        if (!user) {
            return res.status(404).send({ code: 404, message: 'Data not found or already verified' });
        }

        await Review.updateOne({ _id: user._id }, { isVerified: true });
        await user.save();
        res.send({ code: 200, message: 'Review Approved Successfully' });
    } catch (error) {
        console.error('Error updating data:', error);
        res.status(500).json({ message: 'Server error' });
    }
}




const addBlog = async (req, res) => {
    try {
        const { title, description } = req.body;
        await Blog.create({ image: req.file.filename, title, description });
        res.status(200).json({ message: "Blog Added Successfully" });
    } catch (error) {
        res.status(500).json("internal server error");
    }
};




module.exports = { register, login, read, viewReview, approveReview, addBlog };