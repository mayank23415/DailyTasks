var userInput;

function flPrint() {
    userInput = document.getElementById("getNumber");
    flPrime();
}
function wlPrint() {
    userInput = document.getElementById("getNumber");
    wlPrime();
}
function dlPrint() {
    userInput = document.getElementById("getNumber");
    dlPrime();
}


//This method uses for loop to get the prime numbers
function flPrime(){
    //console.log("flPrime initiated")
    var  primeNumbers = [];
    for(let i=1; i<=userInput.value; i++) {
        if(isPrime(i)) {
            primeNumbers.push(i);
        }
    }
    var para = document.getElementById("para");
    for(let i=0; i<primeNumbers.length; i++) {
        para.innerHTML+= primeNumbers[i] + " ";
    }
    para.innerHTML += "<br>"
}

//This method uses while loop to get the prime numbers
function wlPrime(){
    //console.log("wlPrime initiated")
    var primeNumbers = [];
    let i=1;
    while(i<=userInput.value) {
        if(isPrime(i)) {
            primeNumbers.push(i);
        }
        i++;
    }
    var para = document.getElementById("para");
    for(let i=0; i<primeNumbers.length; i++) {
        para.innerHTML+= primeNumbers[i] + " ";
    }
    para.innerHTML += "<br>"
}

//This method uses do-while to get the prime numbers 
function dlPrime(){
    //console.log("dlPrime initiated")
    var primeNumbers = [];
    let i=1;
    do{
        if(isPrime(i)) {
            primeNumbers.push(i);
        }
        i++;
    }while(i<=userInput.value);
    var para = document.getElementById("para");
    for(let i=0; i<primeNumbers.length; i++) {
        para.innerHTML+= primeNumbers[i] + " ";
    }
}

//This method checks whether a number is prime or not
function isPrime(x) {
    if(x == 1 || x == 0) return false;

    let root = Math.sqrt(x);
    for(let i=2; i<=root; i++) {
        if(x%i == 0) return false;
    }
    return true;
}