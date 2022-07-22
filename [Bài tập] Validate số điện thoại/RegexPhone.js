"use strict";
exports.__esModule = true;
exports.RegexPhone = void 0;
var RegexPhone = /** @class */ (function () {
    function RegexPhone() {
        this.PHONE_REGEX = /^[(0-9)]{2,2}-[(0-9)]{8}$/;
    }
    RegexPhone.prototype.Validate_PHONE = function (regex) {
        return this.PHONE_REGEX.test(regex);
    };
    return RegexPhone;
}());
exports.RegexPhone = RegexPhone;
