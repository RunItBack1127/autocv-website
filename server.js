const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const VUE_SERVER = express();
const SERVER_PORT = 6420;

VUE_SERVER.use(serveStatic(path.join(__dirname, 'dist')));
VUE_SERVER.listen(process.env.PORT || SERVER_PORT);