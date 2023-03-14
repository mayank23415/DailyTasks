let inputArray = ['1', 'a', '2', 'b', '3', 'c', '4', 'd', '5', 'e'];
let arrayOfNumbers : number[] = [];

function isInteger() {
    for (let i = 0; i < inputArray.length; i++) {
        if (Number.isInteger(parseInt(inputArray[i]))) {
            arrayOfNumbers.push(parseFloat(inputArray[i]));
        } else {
            console.log(inputArray[i].toUpperCase());
        }

    }
}
isInteger();