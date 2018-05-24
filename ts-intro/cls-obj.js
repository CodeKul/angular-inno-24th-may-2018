"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.speedUp = function () {
        this.spd += 5;
    };
    return Car;
}());
exports.Car = Car;
var Bmw = /** @class */ (function (_super) {
    __extends(Bmw, _super);
    function Bmw() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bmw;
}(Car));
exports.Bmw = Bmw;
