"use strict";
exports.__esModule = true;
var RegexPhone_1 = require("./RegexPhone");
var a = new RegexPhone_1.RegexPhone();
var c = '(84)-(78094848)';
var b = '(a8)-(22222222)';
console.log(a.Validate_PHONE(c));
console.log(a.Validate_PHONE(b));
