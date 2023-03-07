function main() {
    var bulb = document.getElementById("bulb");

    if(bulb.src.match("bulbOnn")) {
        bulb.src = "Images/bulbOff.jpg";
    }else {
        bulb.src = "Images/bulbOnn.jpg";
    }
    
    var off = document.getElementById("off");
    off.textContent = "Onn";
}