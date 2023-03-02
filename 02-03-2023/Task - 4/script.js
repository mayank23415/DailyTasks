//Var 
function varProperties() {
    //Line "console.log(greeting) will print undefined
    //on console. Javascript declares undeclared var
    //object with value undefined."
    console.log(greeting);
    var greeting = "hello";
    console.log(greeting);
    //In the following code we are re-declaring the var.
    var greeting = "hello, everyone";
    console.log(greeting);
}
//Executing the following line of code will give : 
//Greeting not defined error in the console.
//console.log(greeting);

//Let 
function letProperties(){
    //Executing the following code will give us refrence
    //error saying : Cannot access 'greeting' before
    //initialization
    //console.log(greeting);  
    let greeting = "Hi";
    let times = 4;
    if(times > 3) {
        let hello = "Hi, everyone";
        console.log(hello);
    }
    //Executing the following code will give Refrence 
    //error showing : hello is not defined. This shows 
    //that let objects are block scoped.
    //console.log(hello); 
    console.log(greeting);
    //Execution of following code will give us 
    //SyntaxError: Identifier 'greeting' has already 
    //been declared. which demonstrates that let can't 
    //be redeclared but it can be updated.
    //let greeting = "Hii";
    
    greeting = "Hey";
    console.log(greeting);
}

//Const
function constProperties(){
    //Const objects are block scoped and they maintain
    //constant values. 
    const greeting = "Good morning";
    //Executing the following code will give : 
    //TypeError: Assignment to constant variable.
    //which shows that const variable can't be updated.
    //greeting = "Good morning, everyone";
    const count = 4;
    if(count < 3){
        const greet = "Good evening";
        console.log(greet);
    }  
    //console.log(greet);
    //Const can't be re-declared and updated but property
    //of a const object can be modified if we declare it 
    // this way.
    const day = {
        name : "Monday",
        number: 1
    }
    console.log(day.name + " " + day.number);
    day.name = "Tuesday";
    day.number = 2;
    console.log(day.name + " " + day.number);
}
