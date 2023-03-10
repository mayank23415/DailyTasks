// Public Modifier - Accessible by all and default modifier
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
var player = /** @class */ (function () {
    function player(playerName, playerCode) {
        this.playerName = playerName;
        this.playerCode = playerCode;
    }
    return player;
}());
var ply = new player("Dravid", 7);
console.log(ply.playerName + " - " + ply.playerCode);
//Private Modifier - Accessible only by class members
var student = /** @class */ (function () {
    function student(studentName, studentRoll) {
        this.studentName = studentName;
        this.studentRoll = studentRoll;
    }
    return student;
}());
var std = new student("Mayank Awasthi", 56);
// console.log(std.studentName + " " + std.studentRoll);
// The above line of code will throw error studentRoll is 
// private and only accessible within class 'student'
console.log(std.studentName);
//Protected Modifier - if any member is declared 
//protected then it can only be accessed by sub-class.
var Dog = /** @class */ (function () {
    function Dog(sound) {
        this.sound = sound;
    }
    Dog.prototype.showSound = function () {
        console.log(this.sound);
    };
    return Dog;
}());
var Bulldog = /** @class */ (function (_super) {
    __extends(Bulldog, _super);
    function Bulldog(sound) {
        return _super.call(this, sound) || this;
    }
    Bulldog.prototype.showSound = function () {
        console.log(this.sound);
    };
    return Bulldog;
}(Dog));
var bullDog = new Bulldog("Woof");
bullDog.showSound();
