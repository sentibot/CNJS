"use strict";

var express = require("express");
var mongo = require("mongodb");
var uuid = require("uuid/v4");

var app = express();

app.get("/", function(req, res){
    res.send("Hello");
});

app.get("/", function(req, res){
    res.send("Hello");
});


app.listen(8080, function(){
    console.log("App listening on :8080");
});