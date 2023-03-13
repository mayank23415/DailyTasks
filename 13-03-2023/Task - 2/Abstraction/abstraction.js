//Abstraction - The main purpose of abstraction it to 
//hide the unecessary details from the user.
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
var Employee = /** @class */ (function () {
    function Employee(name, rate) {
        this.name = name;
        this.rate = rate;
    }
    return Employee;
}());
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(name, rate, workingHours) {
        var _this = _super.call(this, name, rate) || this;
        _this.workingHours = workingHours;
        return _this;
    }
    FullTimeEmployee.prototype.salary = function () {
        return this.workingHours * this.rate;
    };
    return FullTimeEmployee;
}(Employee));
var Freelancer = /** @class */ (function (_super) {
    __extends(Freelancer, _super);
    function Freelancer(name, rate, workingHours) {
        var _this = _super.call(this, name, rate) || this;
        _this.workingHours = workingHours;
        return _this;
    }
    //Child class implementing abstract method.
    Freelancer.prototype.salary = function () {
        return this.workingHours * this.rate;
    };
    return Freelancer;
}(Employee));
var employee = new FullTimeEmployee("John", 100, 8);
var freelancer = new Freelancer("Shawn", 80, 7);
console.log(employee.name + " : Salary- " + employee.salary());
console.log(freelancer.name + " : Salary- " + freelancer.salary());
