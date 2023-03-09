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
})