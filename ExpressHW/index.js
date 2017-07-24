var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("Hello World");
});

app.post('/', function(req, res){
    res.send("POST to HomePage");
});

app.listen(8080);