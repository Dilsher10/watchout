const express = require('express');
const router = express.Router();
require('../utils/db');
const adminControllers = require("../controllers/admin-controller");



// Register Route

router.route('/admin/register').post(adminControllers.register);


// Login Route

router.route('/admin/login').post(adminControllers.login);






module.exports = router;