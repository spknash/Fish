const http = require("http");
const express = require("express");
const body_parser = require("body-parser");
const path = require('path');

const root_dir = require('./utils/path');
const home_route = require('./routes/home');
const join_route = require('./routes/join');
const create_route = require('./routes/create');
const app = express();

app.use(body_parser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/join', join_route);
app.use('/create', create_route);
app.use(home_route);
app.use((req,res,next) => {
    res.status(404).sendFile(path.join(root_dir, 'pages', 'page_not_found.html'));
})


const server = http.createServer(app);
server.listen(3000);
