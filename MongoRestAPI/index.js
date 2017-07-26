"use strict";

var express = require("express");
var mongo = require("mongodb");
var uuid = require("uuid/v4");

var products = require("/modules/products.js");
var orders = require("/modules/orders.js");

var app = express();

// products CRUD
{
    app.put("/products", function(req, res){
        res.send();
    });

    app.post("/products", function(req, res){
        res.send();
    });

    app.get("/products", function(req, res){
        res.send();
    });

    app.delete("/product", function(req, res){
        res.send();
    });
}

app.listen(8080, function(){
    console.log("App listening on :8080");
});