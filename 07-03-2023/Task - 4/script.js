let source = document.getElementById("selectSource");
let destination = document.getElementById("selectDestination");

let route = new Map();
route.set("Delhi", ["Delhi"]);
route.set("Mumbai", ["Mumbai"]);
route.set("Lucknow", ["Lucknow"]);
route.set("Punjab", ["Punjab"]);
route.set("Uttarakhand", ["Uttarakhand"])

function sourceSelection() {
    let destOptions = destination.options;
    let blockedDest = route.get(source.value);
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



function main() {
    let newBlockedDest = route.get(source.value);
    newBlockedDest.push(destination.value);
    route.set(source.value, newBlockedDest);

    let showRoutes = document.getElementById("routes");
    showRoutes.innerHTML += source.value + " to " + destination.value + "<br>";

    source.selectedIndex = 0;
    destination.selectedIndex = 0;
}