const express = require("express");
const router = express.Router();

// All Post
router.get('/', function(req, res){
    res.send('list of all post so far');
});


// Create Post
router.get('/createPost', function(req, res){
    res.send('Inside Create Post');
});


module.exports = router;