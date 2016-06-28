var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Ball = (function () {
    function Ball(name) {
        this.price = 50;
        this.name = name;
        console.log("Mi pelota cuesta: $" + this.price);
    }
    Ball.prototype.setBrand = function (brandName) {
        this.brandName = brandName;
    };
    return Ball;
}());
var Rugby = (function (_super) {
    __extends(Rugby, _super);
    function Rugby(brandName, shape, width) {
        _super.call(this, brandName);
    }
    return Rugby;
}(Ball));
var myBall = new Ball('picara');
myBall.setBrand('Nike');
console.log(myBall);
console.log("Mi pelota se llama " + myBall.name);
console.log("Mi pelota es de la marca: " + myBall.brandName);
var Calculator = (function () {
    function Calculator() {
    }
    Calculator.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.minus = function (a, b) {
        return a - b;
    };
    Calculator.value = 123;
    return Calculator;
}());
console.log(Calculator.add(2, 8));
console.log(Calculator.value);
//console.log(Calculator.minus(2,8));
