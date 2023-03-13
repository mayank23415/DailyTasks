//Typescript used class based inheritance which is 
//syntactical sugar of prototype inheritance.
//It allows - Single and Multilevel inheritance.
class Vehicle {
    constructor(color, name) {
        this.color = color;
        this.name = name;
    }
    getName() {
        return this.name;
    }
    getColor() {
        return this.color;
    }
}
//Single level Inheritance - 
class Car extends Vehicle {
    constructor(color, name, maxSpeed) {
        //Super keyword is used to call parent constructor and methods.
        super(color, name);
        this.maxSpeed = maxSpeed;
    }
    getSpeed() {
        return this.maxSpeed;
    }
}
//Mutlilevel Inheritence -
class SUV extends Car {
    constructor(color, name, maxSpeed, carType) {
        super(color, name, maxSpeed);
        this.carType = carType;
    }
    //Using super to access parent members 
    getInfo() {
        console.log(super.getName() + " - Color: " + super.getColor() + " MaxSpeed: " + super.getSpeed() + " Type: " + this.carType);
    }
}
let car = new SUV("Black", "Suzuki", 90, "Off Roader");
car.getInfo();
class Guitarist {
    constructor(name, age, instrument, skill) {
        this.name = name;
        this.age = age;
        this.instrument = instrument;
        this.skill = skill;
    }
}
let person = new Guitarist("John", 23, "Base Guitar", "Sound Engineer");
console.log(person.name + " is " + person.age + " old, He plays " + person.instrument + " and he is also a " + person.skill);
