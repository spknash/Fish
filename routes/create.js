const express = require('express');
const path = require('path');
const root_dir = require('../utils/path');
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log("serving the create page");
    res.sendFile(path.join(root_dir, 'pages', 'create.html'));
})

router.post('/', (req, res, next) => {
    console.log("posting create game fields");
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;