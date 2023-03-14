//Abstraction - The main purpose of abstraction it to 
//hide the unecessary details from the user.


abstract class Employee {
    name: string;
    rate: number;
    constructor(name: string, rate: number) {
        this.name = name;
        this.rate = rate;
    }

    //abstract method
    public abstract salary(): number;
}


class FullTimeEmployee extends Employee {
    workingHours: number;
    constructor(name: string, rate: number, workingHours: number) {
        super(name, rate);
        this.workingHours = workingHours;
    }

    public salary(): number {
        return this.workingHours * this.rate;
    }
}

class Freelancer extends Employee {
    workingHours: number;
    constructor(name, rate, workingHours) {
        super(name, rate);
        this.workingHours = workingHours;
    }

    //Child class implementing abstract method.
    public salary(): number {
        return this.workingHours * this.rate;
    }
}


let employee = new FullTimeEmployee("John", 100, 8);

let freelancer = new Freelancer("Shawn", 80, 7);

console.log(employee.name + " : Salary- " + employee.salary());
console.log(freelancer.name + " : Salary- " + freelancer.salary());