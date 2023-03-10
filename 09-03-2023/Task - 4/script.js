let promise = new Promise((resolve, reject)=>{
    let request = new XMLHttpRequest();
    request.open("GET", "https://www.boredapi.com/api/activity");
    request.onload = function() {
        if (request.status == 200) {
            resolve(JSON.parse(request.response));
          } else {
            reject("File not Found");
          }
    }
    request.send();
});

promise.then((value)=>{
    document.getElementById("display").innerHTML = value['activity'];
},(error)=>{
    document.getElementById("display").innerHTML = error;
});


//promise - it is a js object used to link producing and 
//consuming code.
let myPromise = new Promise(function(resolve, reject){
    let x = 0;

    if(x == 0) {
        resolve("OK");//when process is successful
    }else {
        reject("ERROR");//when there is error
    }
});

myPromise.then(
    (value) => {console.log(value)},
    (error) => {console.log(error)}
)