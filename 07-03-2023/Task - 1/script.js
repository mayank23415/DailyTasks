function main() {
    var paraElement1 = document.getElementById("paraElement1");
    paraElement1.innerHTML += "Yes it updated by using its ID";
    
    var paraElement3 = document.getElementsByTagName("p");
    paraElement3[1].style.color = "blue";

    var paraElement2 = document.getElementsByClassName("paraElement2");
    paraElement2[0].style.color = "orange";
    
}