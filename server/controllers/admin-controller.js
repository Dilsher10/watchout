const Admin = require("../models/admin-model");
const Review = require("../models/review-model");
const Blog = require("../models/blog-model");
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');



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
                res.status(200).json({ message: "Login Successfully", token: await adminExist.generateToken(), adminId: adminExist._id.toString(), adminName: adminExist.name });
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


// Add Blog

const addBlog = async (req, res) => {
    try {
        const { title, content } = req.body;
        await Blog.create({ image: req.file.filename, title, content });
        res.status(200).json({ message: "Blog Added Successfully" });
    } catch (error) {
        res.status(500).json("internal server error");
    }
};



// View Blog

const blogs = async (req, res) => {
    try {
        const blogs = await Blog.find({});
        res.send(blogs);
    } catch (error) {
        res.status(500).json("internal server errorr");
    }
};



// Read Blog

const readBlog = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Blog.findOne({ _id: id });
        res.send(data);
    } catch (error) {
        res.status(500).json("internal server errorr");
    }
};




// Delete Blog

const deleteBlog = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Blog.deleteOne({ _id: id });
        res.send({ code: 200, message: "Blog deleted successfully", data: data })
    } catch (error) {
        console.error('Error updating data:', error);
        res.status(500).json({ message: 'Server error' });
    }
}




// Forgot Password Controller

const forgotPassword = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await Admin.findOne({ email });

        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        const _otp = Math.floor(1000 + Math.random() * 9000);

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'watchoutalert919@gmail.com',
                pass: 'zdlywmjctlrzeblz'
            }
        });

        let MailGenerator = new Mailgen({
            theme: "default",
            product: {
                name: "Watchout Alert",
                link: 'https://watchoutalert.com/'
            }
        });

        let response = {
            body: {
                name: `${user.name}`,
                intro: "Please confirm your OTP.",
                outro: `Here is your OTP code: ${_otp}`,
            }
        };

        let mail = MailGenerator.generate(response);

        let message = {
            from: 'watchoutalert919@gmail.com',
            to: email,
            subject: "Reset Password",
            html: mail
        };

        await transporter.sendMail(message);
        await Admin.findOneAndUpdate({ email }, { otp: _otp });
        return res.status(200).send({ message: "You should receive an email with OTP." });
    } catch (error) {
        console.error("Error in forgotPassword:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};






// Reset Password Controller

const resetPassword = async (req, res) => {
    try {

        const admin = await Admin.findOne({ otp: req.body.otp });

        if (!admin) {
            return res.status(404).send({ code: 404, message: 'Invalid OTP' });
        }

        await Admin.updateOne({ email: admin.email }, { password: req.body.password });

        admin.otp = undefined;
        await admin.save();

        res.send({ code: 200, message: 'Password updated successfully' });
    } catch (err) {
        console.error('Error resetting password:', err);
        res.status(500).send({ code: 500, message: 'Server error' });
    }
}



module.exports = { register, login, read, viewReview, approveReview, addBlog, blogs, readBlog, deleteBlog, forgotPassword, resetPassword };