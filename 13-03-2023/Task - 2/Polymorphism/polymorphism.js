//Polymorphism - Same name but different functionality
//This concept is used to improve the reusability and 
//readability of code 
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
//Overloading - parameter types can change but return 
//type remains the same.
//Overloading - 
var Message = /** @class */ (function () {
    function Message(message) {
        this.message = message;
    }
    Message.prototype.sendMessage = function (person) {
        var _this = this;
        if (typeof person === "string") {
            return "".concat(this.message, " ").concat(person);
        }
        else if (Array.isArray(person)) {
            return person.map(function (name) { return "".concat(_this.message).concat(name); });
        }
        else {
            throw new Error("Invalid Type");
        }
    };
    return Message;
}());
var sms = new Message("How are you doing? ");
console.log(sms.sendMessage("John"));
console.log(sms.sendMessage(["John", "Shawn"]));
//Overriding = 
var RBI = /** @class */ (function () {
    function RBI(principle, time) {
        this.principle = principle;
        this.time = time;
    }
    RBI.prototype.getInterestRate = function () {
        return (this.principle * 7 * this.time) / 100;
    };
    return RBI;
}());
var SBI = /** @class */ (function (_super) {
    __extends(SBI, _super);
    function SBI(principle, time) {
        return _super.call(this, principle, time) || this;
    }
    SBI.prototype.getInterestRate = function () {
        return (this.principle * 8 * this.time) / 100;
    };
    return SBI;
}(RBI));
var Axis = /** @class */ (function (_super) {
    __extends(Axis, _super);
    function Axis(principle, time) {
        return _super.call(this, principle, time) || this;
    }
    Axis.prototype.getInterestRate = function () {
        return (this.principle * 8.5 * this.time) / 100;
    };
    return Axis;
}(RBI));
var rbi_account = new RBI(2000, 2);
var sbi_account = new SBI(2000, 2);
var axis_account = new Axis(2000, 2);
console.log("RBI: " + rbi_account.getInterestRate() + " SBI: " + sbi_account.getInterestRate() + " Axis: " + axis_account.getInterestRate());
