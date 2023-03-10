var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Object.defineProperty(Person.prototype, "personInfo", {
        get: function () {
            return this.firstName + " " + this.lastName + " " + this.age;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
function createPerson() {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var age = document.getElementById("age");
    var person = new Person(firstName === null || firstName === void 0 ? void 0 : firstName.value, lastName === null || lastName === void 0 ? void 0 : lastName.value, age === null || age === void 0 ? void 0 : age.value);
    var showInfo = document.getElementById("showInfo");
    showInfo.innerHTML += person.personInfo + "<br>";
    console.log(person.personInfo);
}
