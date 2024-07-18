const express = require('express');
const router = express.Router();
require('../utils/db');
const planController = require("../controllers/plan-controller");

router.route('/user/view-plans').get(planController.read);

module.exports = router;