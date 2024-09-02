const express = require('express');
const cors = require('cors')
const router = express.Router();
require('../utils/db');
const userControllers = require("../controllers/user-controller");
router.use(cors())
router.use(express.json());



// Register Route

router.route('/user/register').post(userControllers.register);


// Login Route

router.route('/user/login').post(userControllers.login);



// Forgot Password Route

router.route('/user/forgot-password').post(userControllers.forgotPassword);


// Forgot Password Route

router.route('/user/reset-password').post(userControllers.resetPassword);


// Verify Account Route

router.route('/user/verify-account').post(userControllers.verifyAccount);


// All Users

router.route('/user/users').get(userControllers.read);

// Read Single User

router.route('/user/read-user/:id').get(userControllers.readSingleUser);

module.exports = router;