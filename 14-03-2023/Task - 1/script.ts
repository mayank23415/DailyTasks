/*Generic - In languages like C# and Java, one of the 
main tools in the toolbox for creating reusable 
components isgenerics, that is, being able to create a
component thatcan work over a variety of types rather 
than a single one.This allows users to consume these
components and use their own types.*/

//Basic function using Generic Type 
function identity <Type> (input : Type) : Type {
    console.log(input);
    return input;
}

identity(5);
identity("Mayank");
identity(5.002);

//Generic Class - Generic classes have generic type 
//parameter.

//Example 1 - 
class Pair<Key, Value> {
    key : Key;
    value : Value;

    display() : void {
        console.log(this.key + " : " + this.value);
    } 
}


let firstPair = new Pair<string, number>();
firstPair.key = "Mayank";
firstPair.value = 1;
firstPair.display();

//Example 2 - 
class MathematicalOperation <Type> {
    add : (x:Type, y:Type) => Type;
    sub : (x:Type, y:Type) => Type;
}

let operation = new MathematicalOperation<number>();

operation.add = ( x, y)=>{ return x + y};
console.log(operation.add(4, 5))
operation.sub = (x, y)=>{return x - y};
console.log(operation.sub(5, 2));


//Generic Constraint - They are used when we’d like to 
//constrain this function to work with any and all types 
//that also  have a particular property.

interface properties {
    length : number;
}

function person<Type extends properties> (input : Type) : Type {
    console.log(input + " and the length of this string  : " + input.length);
    return input;
}

person("Mayank");


