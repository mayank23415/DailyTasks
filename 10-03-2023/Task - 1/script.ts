class Person {
    private firstName: string;
    private lastName: string;
    private age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get personInfo() {
        return this.firstName + " " + this.lastName + " " + this.age;
    }
}

function createPerson() {
    const firstName = document.getElementById("firstName") as HTMLInputElement | null;
    const lastName = document.getElementById("lastName") as HTMLInputElement | null;
    const age = document.getElementById("age") as HTMLInputElement | null;


    let person  = new Person(<any>firstName?.value, <any>lastName?.value, <any>age?.value);

    let showInfo = document.getElementById("showInfo")as HTMLElement;
    showInfo.innerHTML += person.personInfo + "<br>";
    console.log(person.personInfo);
}