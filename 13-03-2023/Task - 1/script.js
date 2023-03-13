//Typescript used class based inheritance which is 
//syntactical sugar of prototype inheritance.
//It allows - Single and Multilevel inheritance.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(color, name) {
        this.color = color;
        this.name = name;
    }
    Vehicle.prototype.getName = function () {
        return this.name;
    };
    Vehicle.prototype.getColor = function () {
        return this.color;
    };
    return Vehicle;
}());
//Child class car inherits properties of parent class
//vehicle by using extend keyword.
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(color, name, maxSpeed) {
        var _this = 
        //Super keyword is used to call parent constructor and methods.
        _super.call(this, color, name) || this;
        _this.maxSpeed = maxSpeed;
        return _this;
    }
    Car.prototype.getSpeed = function () {
        return this.maxSpeed;
    };
    return Car;
}(Vehicle));
var SUV = /** @class */ (function (_super) {
    __extends(SUV, _super);
    function SUV(color, name, maxSpeed, carType) {
        var _this = _super.call(this, color, name, maxSpeed) || this;
        _this.carType = carType;
        return _this;
    }
    //Using super to access parent members 
    SUV.prototype.getInfo = function () {
        console.log(_super.prototype.getName.call(this) + " - Color: " + _super.prototype.getColor.call(this) + " MaxSpeed: " + _super.prototype.getSpeed.call(this) + " Type: " + this.carType);
    };
    return SUV;
}(Car));
var car = new SUV("Black", "Suzuki", 90, "Off Roader");
car.getInfo();
