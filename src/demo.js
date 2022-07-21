"use strict";
exports.__esModule = true;
var rl = require("readline-sync");
// let regexpNumber = new RegExp('^[+ 0-9]{5}$');
// let regexpNumber = /^\w+@\w+\.com$/i;
var regexpNumber = /^\w+@gmail.com$/i;
var count = 0;
function demo() {
    var number = rl.question('nhập giá trị:');
    // console.log('giá trị cần nhập phải đủ 5 ký tự từ 0-9');
    console.log('email phải có ký tự chữ hoặc số và không chứa ký tự đặc biệt');
    if (regexpNumber.test(number)) {
        console.log('đúng');
    }
    else if (count == 2) {
        console.log("b\u1EA1n \u0111\u00E3 nh\u1EADp qu\u00E1 ".concat(count, " l\u1EA7n m\u1EDDi b\u1EA1n ch\u1EA1y l\u1EA1i ct"));
    }
    else if (count < 3) {
        count++;
        console.log('nhập sai mời nhập lại');
        console.log(count);
        demo();
    }
}
demo();
