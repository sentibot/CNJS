"use strict";

var fs = require('fs');

console.log("========== PROGRAM START ==========");
var data = fs.readFile('input.txt', function(err, data){
    console.log(data.toString());
});

console.log("========== PROGRAM END ==========");