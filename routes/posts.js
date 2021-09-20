const express = require("express");
const router = express.Router();

// All Post
router.get('/', (req, res) => {
    res.send('list of all post so far');
});

// Create Post
router.put('/createpost', (req, res) => {
    res.send('Inside Create Post');
});

// Delete Post
router.delete('/deletepost', (req, res) => {
    res.send('Inside Delete Post');
});

// update Post
router.patch('/updatepost', (req, res) => {
    res.send('inside updates Post');
});

module.exports = router;