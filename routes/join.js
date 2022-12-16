const express = require('express');
const path = require('path');
const root_dir = require('../utils/path');
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log("serving the join page");
    res.sendFile(path.join(root_dir, 'pages', 'join.html'));
})

router.post('/', (req, res, next) => {
    console.log("posting join game fields");
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;