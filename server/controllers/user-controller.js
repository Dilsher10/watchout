const User = require("../models/user-model");
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');


// Register Controller

const register = async (req, res) => {
    try {
        const _otp = Math.floor(1000 + Math.random() * 9000);
        const { fname, lname, gender, dob, city, state, country, phone, email, ethnicity, password } = req.body;
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "Email already exists" });
        }
        const userCreated = await User.create({ fname, lname, gender, dob, city, state, country, phone, email, ethnicity, password, otp: _otp });

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
                name: `${userCreated.fname} ${userCreated.lname}`,
                intro: "Please verify your account.",
                outro: `Here is your OTP code: ${_otp}`,
            }
        };

        let mail = MailGenerator.generate(response);

        let message = {
            from: 'watchoutalert919@gmail.com',
            to: email,
            subject: "Verify Your Account",
            html: mail
        };

        await transporter.sendMail(message);

        res.status(200).json({ message: "You should receive an email with OTP.", token: await userCreated.generateToken(), userId: userCreated._id.toString() });
    } catch (error) {
        res.status(500).json("internal server error");
    }
};



// Verify Account Controller

const verifyAccount = async (req, res) => {
    try {

        const user = await User.findOne({ otp: req.body.otp });

        if (!user) {
            return res.status(404).send({ code: 404, message: 'Invalid OTP' });
        }

        await User.updateOne({ email: user.email }, { isVerified: true });

        user.otp = undefined;
        await user.save();

        res.send({ code: 200, message: 'Account Verified Successfully' });
    } catch (err) {
        console.error('Error resetting password:', err);
        res.status(500).send({ code: 500, message: 'Server error' });
    }
}





// Login Controller

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email });

        if (userExist) {
            if (userExist.isVerified) {
                if (password === userExist.password) {
                    const token = await userExist.generateToken();

                    res.status(200).json({ message: "Login Successful", token, userId: userExist._id.toString(), userName: userExist.fname });
                } else {
                    res.status(401).json({ error: "Invalid Password" });
                }
            } else {
                res.status(401).json({ error: "Account not verified. Please verify your account." });
            }
        } else {
            res.status(404).json({ error: "Email not registered" });
        }
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}





// Forgot Password Controller

const forgotPassword = async (req, res) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });

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
                link: 'https://watchout.yourdemolink.com/'
            }
        });

        let response = {
            body: {
                name: `${user.fname} ${user.lname}`,
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
        await User.findOneAndUpdate({ email }, { otp: _otp });
        return res.status(200).send({ message: "You should receive an email with OTP." });
    } catch (error) {
        console.error("Error in forgotPassword:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};






// Reset Password Controller

const resetPassword = async (req, res) => {
    try {

        const user = await User.findOne({ otp: req.body.otp });

        if (!user) {
            return res.status(404).send({ code: 404, message: 'Invalid OTP' });
        }

        await User.updateOne({ email: user.email }, { password: req.body.password });

        user.otp = undefined;
        await user.save();

        res.send({ code: 200, message: 'Password updated successfully' });
    } catch (err) {
        console.error('Error resetting password:', err);
        res.status(500).send({ code: 500, message: 'Server error' });
    }
}


// Read All Users

const read = async (req, res) => {
    try {
        const user = await User.find({ isVerified: true });
        res.send(user);
    } catch (error) {
        res.status(500).json("internal server errorr");
    }
};



// Read All Users

const readSingleUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.find({ _id: id });
        res.send(user);
    } catch (error) {
        res.status(500).json("internal server errorr");
    }
};




module.exports = { register, login, forgotPassword, resetPassword, verifyAccount, read, readSingleUser }