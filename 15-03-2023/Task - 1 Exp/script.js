//Array for dates
let dates = [];
dates.length = 31;
//Array for types of table
let tableType = [];
tableType.length = 3;
//Number of tables under each type
let tables = [];
tables.length = 5;
//Schedule of each table
tableSchedule = [];

function main() {
    let selectedDate = document.getElementById("date").value;
    let startTime = document.getElementById("start").value;
    let endTime = document.getElementById("end").value;
    let selectedTable = document.getElementById("seatSize").value;
    const tableSelected = parseInt(selectedTable.charAt(selectedTable.length - 1));
    let date = parseInt(selectedDate.substr(selectedDate.length - 2, selectedDate.length - 1));
    let obj;
    console.log(timeValidation(startTime, endTime));
    if (timeValidation(startTime, endTime)) {
        obj = {
            date: selectedDate,
            start: startTime,
            endTime: endTime,
        }

        bookTicket(obj);
        tables[0] = tableSchedule;
        tableType[tableSelected] = tables;
        dates[date] = tableType;
        storeData();
    } else {
        alert("Enter Valid Time");
    }
}

function bookTicket(seat) {
    flag = true;
    if (tableSchedule.length == 0) {
        tableSchedule.push(seat);
    } else {
        for (let i = 0; i < tableSchedule.length; i++) {
            if (
                ((tableSchedule[i].start <= seat.start) && (tableSchedule[i].end >= seat.start)) ||
                ((tableSchedule[i].start <= seat.end) && (tableSchedule[i].end >= seat.end))
            ) {
                flag = false;
                break;
            }
        }
        tableSchedule.push(seat);
    }
    if (flag) {
        alert("Table Booked Successfully");
        displayData(seat);
        storeData();
    } else {
        alert("This time slot is booked. Choose differnt slot");
    }
}




//local storage 
function storeData() {
    let serializedData = JSON.stringify(dates);
    localStorage.setItem("dates", serializedData);
}
function clearCache() {
    localStorage.clear();
    let clear = document.getElementById("clear");
    let load = document.getElementById("load");
    clear.disabled = true;
    load.disabled = true;
}


function fetchData() {
    let load = document.getElementById("load");
    load.disabled = true;
    parsedData = JSON.parse(localStorage.getItem("dates"));

    flag = true;
    if (parsedData != null) {
        dates = parsedData;
    } else {
        flag = false;
    }


    if (flag == false) {
        alert("No Entry Found");
    } else {
        displayFetchedData(parsedData);
    }
    return parsedData;

}


//utility
function timeValidation(startTime, endTime) {
    if (startTime == endTime || startTime > endTime) {
        if ((startTime < '09:00' || startTime > '23:00')) {
            return false;
        }
    } else {
        return true;
    }
}

//Deleting Entry 
// function Delete() {
//     let selectedDate = document.getElementById("date").value;
//     let startTime = document.getElementById("start").value;
//     let endTime = document.getElementById("end").value;
//     let selectedTable = document.getElementById("seatSize").value;
//     const tableSelected = parseInt(selectedTable.charAt(selectedTable.length - 1));
//     let date = parseInt(selectedDate.substr(selectedDate.length - 2, selectedDate.length - 1));
//     let data = fetchData();
//     console.log(data);
// }

function displayData(data) {
    let para = document.getElementById("para");
    para.innerHTML += data.date + " table booke for :" + data.start + " - " + data.endTime + "<br>";
}

function displayFetchedData(data) {
    let para = document.getElementById("para");
    for (let i = 0; i < data.length; i++) {
        if (data[i] != null) {
            for (let j = 0; j < data[i].length; j++) {
                if (data[i][j] != null) {
                    for (let k = 0; k < data[i][j].length; k++) {
                        if (data[i][j][k] != null) {
                            for (let l = 0; l < data[i][j][k].length; l++) {
                                if (data[i][j][k][l] != null) {
                                    para.innerHTML += data[i][j][k][l].date + " table booke for :" + data[i][j][k][l].start + " - " + data[i][j][k][l].endTime + "<br>";
                                }

                            }
                        }
                    }
                }

            }
        }
    }
}