// Public Modifier - Accessible by all and default modifier

class player{
    playerName : string;
    playerCode : number;
    constructor(playerName, playerCode) {
        this.playerName = playerName;
        this.playerCode = playerCode;
    }
}

let ply = new player("Dravid", 7);
console.log(ply.playerName + " - " + ply.playerCode);

//Private Modifier - Accessible only by class members

class student{
    studentName : string;
    private studentRoll : number;
    constructor(studentName, studentRoll) {
        this.studentName = studentName;
        this.studentRoll = studentRoll;
    }
}

let std = new student("Mayank Awasthi", 56);
// console.log(std.studentName + " " + std.studentRoll);
// The above line of code will throw error studentRoll is 
// private and only accessible within class 'student'
console.log(std.studentName);


//Protected Modifier - if any member is declared 
//protected then it can only be accessed by sub-class.

class Dog{
    protected sound : string;
    constructor(sound) {
        this.sound = sound;
    }
    
    protected showSound(): void {
        console.log(this.sound);
    }
}

class Bulldog extends Dog{
    constructor(sound) {
        super(sound);
    }

    showSound():void{
        console.log(this.sound);
    }
}

let bullDog = new Bulldog("Woof");
bullDog.showSound();