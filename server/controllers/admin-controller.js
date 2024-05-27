const Admin = require("../models/admin-model");



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


module.exports = { register, login };