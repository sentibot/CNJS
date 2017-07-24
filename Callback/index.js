"use strict";

var fs = require('fs');

var data = fs.readFileSync('input.txt');
console.log("========== PROGRAM START ==========");
console.log(data.toString());
console.log("========== PROGRAM END ==========");