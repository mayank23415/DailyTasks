let arr = ['1', 'a', '2', 'b', '3', 'c', '4', 'd', '5', 'e'];
let number = [];
function isInteger() {
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(parseInt(arr[i]))) {
            number.push(parseFloat(arr[i]));
        }
        else {
            console.log(arr[i].toUpperCase());
        }
    }
}
isInteger();
