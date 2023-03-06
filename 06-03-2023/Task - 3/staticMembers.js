//This document illustrates the use of public static 
//members of a class.

class Employee {
    //Static Property
    static company = "Codestore";
    #name; #number; #email;
    constructor(name, number, email) {
        this.#name = Employee.capitalise(name);
        this.#number = number;
        this.#email = email;
    }

    //Static Method
    static capitalise(name) {
        return name.charAt(0).toUpperCase() + name.substr(1, name.length-1);
    }

    get name() {
        return this.#name;
    }

    get email() {
        return this.#email;
    }

    get number() {
        return this.#number;
    }

    get company() {
        return Employee.company;
    }
}

//We can use public static members of parent class 
//in sub- class.
class Developer extends Employee {
    #role;
    constructor(name, number, email, role) {
        super(name, number, email);
        this.#role = Employee.capitalise(role);
    }

    get role() {
        return this.#role;
    }
}


let emp = new Developer("mayank", "1234567891", "mayank@gmail.com", "frontend");
console.log(emp.company + " " + emp.name + " " + emp.number + " " + emp.email + " " + emp.role);

