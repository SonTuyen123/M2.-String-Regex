"use strict";
exports.__esModule = true;
exports.RexgexStudent = void 0;
var RexgexStudent = /** @class */ (function () {
    function RexgexStudent() {
        this.STUDENT_REGEX = /^[CAP][0-9]{4,4}[GHIKLM]$/;
    }
    RexgexStudent.prototype.Validate = function (regex) {
        return this.STUDENT_REGEX.test(regex);
    };
    return RexgexStudent;
}());
exports.RexgexStudent = RexgexStudent;
