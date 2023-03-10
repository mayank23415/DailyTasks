//Enums - Enums are named constant.
//Numeric Enums - 
var Days;
(function (Days) {
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
    Days[Days["Sunday"] = 7] = "Sunday";
})(Days || (Days = {}));
console.log(Days);
//String Enums - 
var Employee;
(function (Employee) {
    Employee["name"] = "Mayank Awasthi";
    Employee["role"] = "Developer";
    Employee["status"] = "Fresher";
})(Employee || (Employee = {}));
console.log(Employee.name + " " + Employee.role + " " + Employee.status);
var jason = {
    name: "Jason",
    walks: function () { console.log("slowly"); },
    sounds: function () { console.log("good"); },
};
console.log(jason.name);
jason.walks();
jason.sounds();
