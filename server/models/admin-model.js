const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const adminSchema = new mongoose.Schema({
    name: {
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
    password: {
        type: String,
        required: true,
    },
    otp: {
        type: Number,
    },
    isAdmin: {
        type: Boolean,
        default: true,
    }
},{
    timestamps: true,
})




// json web token

adminSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            adminId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        },
        process.env.JWT_SECRET_KEY, {
            expiresIn: "30d",
        }
        );
    } catch (error) {
        console.error(error);
    }
};

const Admin = new mongoose.model("admins", adminSchema);
module.exports = Admin;