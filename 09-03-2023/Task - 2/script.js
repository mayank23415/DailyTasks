let link1 = document.getElementById("link1");
link1.addEventListener("click", blockLink, false);
function blockLink(event) {
    event.preventDefault();
    alert("This link is unreachable");
}


//code for stop propogation starts from here - 
function firstFunction() {
    alert("This is parent");
}

function secondFunction() {
    alert("This is child");
}

function functionFirst() {
    alert("This alert will never be displayed.")
}

//We stopped propogation of even from occurring in the 
//bubbling or capturing phase.
function functionSecond() {
    event.stopPropagation();
    alert("This is child")
}