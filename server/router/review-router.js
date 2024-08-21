const express = require('express');
const router = express.Router();
require('../utils/db');
const reviewControllers = require("../controllers/review-controller");

router.route('/user/add-review/:userId').post(reviewControllers.post);

router.route('/user/reviews/').get(reviewControllers.readAllReviews);

router.route('/user/view-reviews/:userId').get(reviewControllers.read);

router.route('/user/read-review/:id').get(reviewControllers.readSingle);

router.route('/user/delete-review/:id').delete(reviewControllers.deleteReview);

module.exports = router;