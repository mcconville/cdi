/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');
var app = express();
var port = process.env.PORT || 8091;

// serve the files out of ./public as our main files
// app.use(express.static(__dirname + ''));

// app.use('/static', express.static('/'))
app.use(express.static('.'))
// get the app environment from Cloud Foundry
var log4js = require('log4js');
var logger = log4js.getLogger();

logger.level = 'debug';
logger.debug("launching cdi agenda project");

// start server on the specified port and binding host
app.listen(port);
logger.debug("Listening on port ", port);
