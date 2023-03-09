let showChange = document.getElementById("showChange");
//onClick
function Clicked() {
    showChange.innerHTML = "The button is clicked";
}

//oncontextmenu

let box = document.getElementById("myDiv");
box.addEventListener("contextmenu", (e) => {
    e.preventDefault();
})


//ondblclick
function clickedDouble() {
    console.log("Double Click event occured")
    let element = document.getElementById("dblClick");
    element.style.color = "blue";
}


//onmousedown and onmouseup events.
function mouseDown() {
    let para = document.getElementById("para");
    para.style.color = "orange";
}

function mouseUp() {
    let para = document.getElementById("para");
    para.style.color = "blue";
}


//onmouseenter and onmouseleave
function mouseEnter() {
    document.getElementById("box").style.color = "red";
}

function mouseLeave() {
    document.getElementById("box").style.color = "blue";
}

//onmouseover and onmouseout
function mouseOver() {
    document.getElementById("box2").style.color = "orange";
}

function mouseOut() {
    document.getElementById("box2").style.color = "purple";
}

//onmousemove

function mouseMove(e) {
    let x = e.clientX;
    let y = e.clientY;
    let coord = x + "," + y;
    document.getElementById("showCoord").innerHTML = coord;
}

function mouseMoveOut() {
    document.getElementById("showCoord").innerHTML = "";
}