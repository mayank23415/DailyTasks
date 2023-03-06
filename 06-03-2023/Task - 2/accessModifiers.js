//Access Modifiers - These are keywords used to specify
//the accessibility of a member.

//Private - To set a member private in the class we use 
//# as prefix in the name of the member.

//Public - To set a variable or method public we use "_"
//as prefix  in the name of member of the class.

class Person {
    #name; 
    #number; 
    #email; 
    constructor(name, number, email) {
        this.#name = name;
        this.#email = email;
        this.#number = number;
    }

    get number() {
        return this.#number;
    }

    get name() {
        return this.#name;
    }

    get email() {
        return this.#email;
    }
}

let person = new Person("Mayank", "123456789" , "mayank@gmail.com");
console.log(person.name + " " + person.number + " " + person.email);
//if we try to access private member of a class it will 
//throw syntax error. 
//console.log(person.#name);

