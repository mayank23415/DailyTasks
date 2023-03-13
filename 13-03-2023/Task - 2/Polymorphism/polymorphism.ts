//Polymorphism - Same name but different functionality
//This concept is used to improve the reusability and 
//readability of code 

//Overloading - parameter types can change but return 
//type remains the same.


//Overloading - 
class Message {
    message : string;
    constructor(message) {
        this.message = message;
    }

    sendMessage(person : string) : string;
    sendMessage(person : string[]) : string[];
    sendMessage(person : unknown): unknown {
        if(typeof person === "string") {
            return `${this.message} ${person}`;
        }else if(Array.isArray(person)){
            return person.map(name => `${this.message}${name}`);
        }else {
            throw new Error("Invalid Type");
        }
    }
}
let sms = new Message("How are you doing? ");
console.log(sms.sendMessage("John"));
console.log(sms.sendMessage(["John", "Shawn"]));


//Overriding = 
class RBI {
    principle : number;
    time : number;
    constructor(principle, time) {
        this.principle = principle;
        this.time = time;
    }

    getInterestRate() : number {
        return (this.principle * 7 * this.time)/100;
    }
}

class SBI extends RBI {
    constructor(principle, time) {
        super(principle, time);
    }

    //Overriding
    getInterestRate(): number {
        return (this.principle * 8 * this.time)/100;
    }
}

class Axis extends RBI {
    constructor(principle, time) {
        super(principle, time);
    }

    //Overriding
    getInterestRate(): number {
        return (this.principle * 8.5 * this.time)/100;
    }
}

let rbi_account = new RBI(2000, 2);
let sbi_account = new SBI(2000, 2);
let axis_account = new Axis(2000, 2);
console.log("RBI: " + rbi_account.getInterestRate()+" SBI: " + sbi_account.getInterestRate() + " Axis: "+ axis_account.getInterestRate());