"use strict";

// require module
var mHttp = require("http");

// variables
var port = 8080;
var sMessage = "Hello World";

var oServer = mHttp.createServer(function(req, res){
    console.log("========== REQUEST RECEIVED ==========");

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(sMessage);

    res.end();

    console.log("========== RESPONSE SENT ==========");
});
oServer.listen(port);

