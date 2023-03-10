let source = document.getElementById("selectSource");
let destination = document.getElementById("selectDestination");

let sourceToDestination = new Map();
sourceToDestination.set("Delhi", ["Delhi"]);
sourceToDestination.set("Mumbai", ["Mumbai"]);
sourceToDestination.set("Lucknow", ["Lucknow"]);
sourceToDestination.set("Punjab", ["Punjab"]);
sourceToDestination.set("Uttarakhand", ["Uttarakhand"]);

let destinationToSource = new Map();
destinationToSource.set("Delhi", ["Delhi"]);
destinationToSource.set("Mumbai", ["Mumbai"]);
destinationToSource.set("Lucknow", ["Lucknow"]);
destinationToSource.set("Punjab", ["Punjab"]);
destinationToSource.set("Uttarakhand", ["Uttarakhand"]);


function sourceSelection() {
    let destOptions = destination.options;
    let blockedDest = sourceToDestination.get(source.value);
    //console.log(blockedDest[0]);

    for(let i=0; i<destOptions.length; i++) {
        destOptions[i].disabled = false;
    }
    
    for(let i=1; i<destOptions.length; i++) {
        for(let j=0; j<blockedDest.length; j++) {
            if(destOptions[i].value == blockedDest[j]) {
                destOptions[i].disabled = true;
            }
        }
    }
    
}

function destinationSelection() {
    let sourceOptions = source.options;
    let blockedSource = destinationToSource.get(destination.value);

    for(let i=0; i<sourceOptions.length; i++) {
        sourceOptions[i].disabled = false;
    }

    for(let i=1; i<sourceOptions.length; i++) {
        for(let j=0; j<blockedSource.length; j++) {
            if(sourceOptions[i].value == blockedSource[j]) {
                sourceOptions[i].disabled = true;
            }
        }
    }
}

function addRoutes() {
    
    let newBlockedDest = sourceToDestination.get(source.value);
    newBlockedDest.push(destination.value);
    sourceToDestination.set(source.value, newBlockedDest);

    let newBlockedSource = destinationToSource.get(destination.value);
    newBlockedSource.push(source.value);
    destinationToSource.set(source.value, newBlockedSource);

    //reseting dropdowns
    let sourceOptions = source.options;
    for(let i=0; i<sourceOptions.length; i++) {
        sourceOptions[i].disabled = false;
    }

    let destOptions = destination.options;
    for(let i=0; i<destOptions.length; i++) {
        destOptions[i].disabled = false;
    }



    let showRoutes = document.getElementById("routes");
    showRoutes.innerHTML += "from : " + source.value + " to : " + destination.value + "<br>";
    source.selectedIndex = 0;
    destination.selectedIndex = 0;
}