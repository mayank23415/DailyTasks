const source = new Map();
source.set('Delhi', false);
source.set('Banglore', false);
source.set('Mumbai', false);
source.set('Lucknow', false);
source.set('Punjab', false);
source.set('Haryana', false);

const destination = new Map();
destination.set('Delhi', false);
destination.set('Banglore', false);
destination.set('Mumbai', false);
destination.set('Lucknow', false);
destination.set('Punjab', false);
destination.set('Haryana', false);

var selectDestination = document.getElementById("selectDestination");

var selectSource = document.getElementById("selectSource");
for (let city of source.keys()) {
    var option = document.createElement("option");
    option.textContent = city;
    option.value = city;
    selectSource.appendChild(option);
}

for (let city of destination.keys()) {
    var option = document.createElement("option");
    option.textContent = city;
    option.value = city;
    selectDestination.appendChild(option);
}


function sourceSelection() {
    console.log(selectSource.value)
    const opt1 = document.getElementById("selectDestination").getElementsByTagName("option");
    const opt2 = document.getElementById("selectSource").getElementsByTagName("option");
    for(let i=0; i<opt2.length; i++) {
        if(opt2[i].value == selectSource.value){
            opt2[i].disabled = true;
        }
    }
    for(let i=0; i<opt1.length; i++) {
        if(opt1[i].value == selectSource.value){
            opt1[i].disabled = true;
        }else if(source.get(opt1[i].value) == false){
            opt1[i].disabled = false;
        }
    }
}

function destinationSelection() {
    console.log(selectDestination.value)
    const opt1 = document.getElementById("selectSource").getElementsByTagName("option");
    const opt2 = document.getElementById("selectDestination").getElementsByTagName("option");
    for(let i=0; i<opt2.length; i++) {
        if(opt2[i].value == selectSource.value){
            opt2[i].disabled = true;
        }
    }
    for(let i=0; i<opt1.length; i++) {
        if(opt1[i].value == selectSource.value){
            opt1[i].disabled = true;
        }else if(source.get(opt1[i].value) == false){
            opt1[i].disabled = false;
        }
    }
}

function main() {
    source.set(selectSource.value , true)
    destination.set(selectDestination.value, true);

    const sourceOptions = document.getElementById("selectDestination").getElementsByTagName("option");
    
    for(let i=0; i<sourceOptions.length; i++) {
        if(sourceOptions[i].value == selectSource.value){
            sourceOptions[i].disabled = true;
        }
    }

    const destinationOptions = document.getElementById("selectSource").getElementsByTagName("option");
    for(let i=0; i<destinationOptions.length; i++) {
        if(destinationOptions[i].value == selectDestination.value){
            destinationOptions[i].disabled = true;
        }
    }

    var routes = document.getElementById("routes");
    routes.innerHTML += selectSource.value + " to " + selectDestination.value + "<br>";
}