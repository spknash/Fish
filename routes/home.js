const express = require('express');
const path = require('path');
const root_dir = require('../utils/path');
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log("serving the home page");
    res.sendFile(path.join(root_dir, 'pages', 'home.html'));
})

module.exports = router;