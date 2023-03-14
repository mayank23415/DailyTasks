/*Generic - In languages like C# and Java, one of the
main tools in the toolbox for creating reusable
components isgenerics, that is, being able to create a
component thatcan work over a variety of types rather
than a single one.This allows users to consume these
components and use their own types.*/
//Basic function using Generic Type 
function identity(input) {
    console.log(input);
    return input;
}
identity(5);
identity("Mayank");
identity(5.002);
//Generic Class - Generic classes have generic type 
//parameter.
//Example 1 - 
var Pair = /** @class */ (function () {
    function Pair() {
    }
    Pair.prototype.display = function () {
        console.log(this.key + " : " + this.value);
    };
    return Pair;
}());
var firstPair = new Pair();
firstPair.key = "Mayank";
firstPair.value = 1;
firstPair.display();
//Example 2 - 
var MathematicalOperation = /** @class */ (function () {
    function MathematicalOperation() {
    }
    return MathematicalOperation;
}());
var operation = new MathematicalOperation();
operation.add = function (x, y) { return x + y; };
console.log(operation.add(4, 5));
operation.sub = function (x, y) { return x - y; };
console.log(operation.sub(5, 2));
function person(input) {
    console.log(input + " and the length of this string  : " + input.length);
    return input;
}
person("Mayank");
