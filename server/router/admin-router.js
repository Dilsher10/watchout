const express = require('express');
const router = express.Router();
require('../utils/db');
const adminControllers = require("../controllers/admin-controller");

const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));
const multer = require("multer");
const path = require('path')
router.use(express.static('public'));


const storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null,path.join(__dirname,'../public/blogs'),function(error,success){
            if(error) throw error
        });
    },
    filename:function(req, file, cb){
        const name = Date.now()+'-'+file.originalname;
        cb(null, name, function(error1, success1){
            if(error1) throw error1
        })
    }
});

const upload = multer({
    storage: storage
});



// Register Route

router.route('/admin/register').post(adminControllers.register);


// Login Route
router.route('/admin/login').post(adminControllers.login);

// Reviews
router.route('/admin/reviews').get(adminControllers.read);

// View Review
router.route('/admin/view-review/:id').get(adminControllers.viewReview);

// Approve Review
router.route('/admin/approve-review/:id').put(adminControllers.approveReview);

// Add Blog
router.post('/admin/add-blog/',upload.single('image'),adminControllers.addBlog);




module.exports = router;