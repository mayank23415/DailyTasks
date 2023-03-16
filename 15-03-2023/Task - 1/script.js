let tables = new Map();
tables.set("table_1", []);
tables.set("table_2", []);
tables.set("table_3", []);



function bookTable() {
    let start = document.getElementById("startTime").value;
    let end = document.getElementById("endTime").value;
    let tableSize = document.getElementById("seatSize").value;
    let bookedList = document.getElementById("bookedList");
    const seat = {
        start: start,
        end: end,
        name: tablePackage(tableSize)
    }

    if (startEndValidation(seat.start, seat.end)) {
        let bookedTable = tables.get(tableSize);
        flag = true;
        if (bookedTable.length == 0) {
            bookedTable.push(seat);
        } else {
            for (let i = 0; i < bookedTable.length; i++) {
                if (
                    ((bookedTable[i].start <= seat.start) && (bookedTable[i].end >= seat.start)) ||
                    ((bookedTable[i].start <= seat.end) && (bookedTable[i].end >= seat.end))
                ) {
                    flag = false;
                    break;
                }
            }
            bookedTable.push(seat);
        }

        console.log(flag);
        if (flag) {
            alert("Table booked successfully");
            bookedList.innerHTML += seat.name + " table is booked from: " + seat.start + " to " + seat.end + "<br>";
            storeData();
        } else {
            alert("Invalid Time Input");
            flag = true;
        }
    }else {
        alert("invalid time");
    }
}


function clearData() {
    localStorage.clear();
    let clear = document.getElementById("clear");
    let load = document.getElementById("load");
    clear.disabled = true;
    load.disabled = true;
}

//Storing Data in local storage
function storeData() {
    str = "tableInformation_";
    count = 1;
    for (let i of tables.keys()) {
        let serializedData = JSON.stringify(tables.get(i));
        localStorage.setItem(str + count, serializedData);
        count++;
    }
}

function fetchData() {
    let load = document.getElementById("load");
    load.disabled = true;

    str = "tableInformation_";
    count = 1;
    flag = true;
    for (let i of tables.keys()) {
        let obj = JSON.parse(localStorage.getItem(str + count));
        if (obj != null) {
            tables.set(i, obj);
            console.log(tables.get(i));
        } else {
            flag = false;
        }
        count++;
    }
    if (flag == false) {
        alert("No Entry Found");
    } else {
        displayReservations();
    }
}


//Utility Function
function tablePackage(tableSize) {
    if (tableSize == "table_1") {
        return "Two Person";
    } else if (tableSize == "table_2") {
        return "Four Person";
    } else {
        return "Eight Person";
    }
}

function displayReservations() {
    let fetchedList = document.getElementById("fetchedData");
    for (let i of tables.keys()) {
        let booked = tables.get(i);
        for (let j = 0; j < booked.length; j++) {
            fetchedList.innerHTML += booked[j].name + " table is booked from: " + booked[j].start + " to " + booked[j].end + "<br>";
        }
    }
}

function startEndValidation(start, end) {
    if (start > end || start == end)
        return false;
    else
        return true;
}
//Table validation -
