const Review = require("../models/review-model");
const User = require("../models/user-model");


// Create

const post = async (req, res) => {
    try {
        const userId = req.params.userId;
        const { comment } = req.body;

        const user = await User.findOne({ _id: userId });

        const name = user.fname;

        const reviewPosted = await Review.create({ userId, name, comment });
        if (reviewPosted) {
            res.status(200).json({ message: "Posted Successfully" });
        } else {
            res.status(400).json({ message: "Failed to post review" });
        }
    } catch (error) {
        console.error("Error posting review:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};


// Read All User Review

const readAllReviews = async (req, res) => {
    try {
        const reviewData = await Review.find({isVerified: true});
        res.send(reviewData);
    } catch (error) {
        res.status(500).json("internal server errorr");
    }
};



// Read All Of Individual User Review

const read = async (req, res) => {
    try {
        const userId = req.params.userId;
        const reviewData = await Review.find({ userId: userId, isVerified: true });
        res.send(reviewData);
    } catch (error) {
        res.status(500).json("internal server errorr");
    }
};



// Read Single User Review

const readSingle = async (req, res) => {
    try {
        const id = req.params.id;
        const reviewData = await Review.findOne({ _id: id });
        res.send(reviewData);
    } catch (error) {
        res.status(500).json("internal server errorr");
    }
};




// Delete Review

const deleteReview = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Review.deleteOne({ _id: id });
        res.send({ code: 200, message: "Review deleted successfully", data: data })
    } catch (error) {
        console.error('Error updating data:', error);
        res.status(500).json({ message: 'Server error' });
    }
}



module.exports = { post, read, readSingle, deleteReview, readAllReviews };    