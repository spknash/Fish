const http = require("http");
const express = require("express");
const body_parser = require("body-parser");
const path = require('path');

const root_dir = require('./utils/path');
const app = express();

app.use(body_parser.urlencoded({extended: false}));
app.use((req,res,next) => {
    res.status(200).sendFile(path.join(root_dir, 'pages', 'home.html'));
})


const server = http.createServer(app);
server.listen(3000);
