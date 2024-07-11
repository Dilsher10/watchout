const express = require('express');
const router = express.Router();
require('../utils/db');
const postControllers = require("../controllers/post-controller");

const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:true}));
const multer = require("multer");
const path = require('path')
router.use(express.static('public'));


const storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null,path.join(__dirname,'../public/posts'),function(error,success){
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


router.post('/user/post',upload.single('image'),postControllers.post);

router.route('/user/view-post').get(postControllers.read);

router.route('/user/search').post(postControllers.search);



module.exports = router;