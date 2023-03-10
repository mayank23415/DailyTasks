//Enums - Enums are named constant.

//Numeric Enums - 
enum Days{
    Monday =1, 
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday, 
    Sunday,
}

console.log(Days);
//String Enums - 
enum Employee{
    name = "Mayank Awasthi",
    role = "Developer", 
    status = "Fresher",
}

console.log(Employee.name + " " + Employee.role + " " + Employee.status);


//Interfaces - If any member implements an interface 
//it must implement all the members of interface.

interface person {
    name : string, 
    walks() : void,
    sounds() : void,
}

const jason : person = {
    name : "Jason",
    walks () {console.log("slowly")},
    sounds() {console.log("good")},
}

console.log(jason.name);
jason.walks();
jason.sounds();