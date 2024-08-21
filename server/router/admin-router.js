const express = require('express');
const router = express.Router();
require('../utils/db');
const adminControllers = require("../controllers/admin-controller");



// Register Route

router.route('/admin/register').post(adminControllers.register);


// Login Route

router.route('/admin/login').post(adminControllers.login);

// Reviews

router.route('/admin/reviews').get(adminControllers.read);

// View Review

router.route('/admin/view-review/:id').get(adminControllers.viewReview);

// Verify Review

router.route('/admin/approve-review/:id').put(adminControllers.approveReview);





module.exports = router;