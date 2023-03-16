let appointments = [];
if (fetchData() != null) {
    appointments = fetchData();
}
console.log(appointments);

function bookTable() {
    let table = {
        date: "",
        start: "",
        end: "",
        type: ""
    }


    let date = document.getElementById("date").value;
    table.date = date;
    if (tableType(table, date)) {
        alert("Table Booked Successfully");
        storeData(appointments);
    } else {
        alert("Change table type or time");
    }
}

function tableType(table, date) {
    let tTable = document.getElementById("tableType").value;
    table.type = tTable;
    return checkAvailability(table, date, tTable);
}

function checkAvailability(table, date, type) {
    let start = getStartTime();
    let end = getEndTime();
    if (timeValidation(start, end)) {
        if (appointments.length == 0) {
            table.start = start;
            table.end = end;
            appointments.push(table);
            return true;
        } else {
            let index = -1;
            index = appointments.findIndex((table) => table.start == start && table.end == end && table.date == date && table.type == type);
            if (index == -1) {
                appointments.push(table);
                return true;
                console.log(appointments);
            } else {
                alert(typeName(type) + " is not available please select different table");
                return false;
            }
        }
    } else {
        alert("Enter Valid Time");
    }

}


//Delete 
function Delete() {
    let date = document.getElementById("date").value;
    let start = getStartTime();
    let end = getEndTime();
    let tableType = document.getElementById("tableType").value;
    let index = -1;
    if (timeValidation(start, end)) {
        
        index = appointments.findIndex((table) => table.start == start && table.end == end && table.date == date && table.type == tableType);
        
    } else {
        alert("Enter valid data to remove table appointment")
    }

    if (index != -1) {
        appointments.splice(index, 1);
        storeData(appointments);
        alert("Element Deleted");
    } else {
        alert("Invalid Data");
    }
}

//utility 
function typeName(type) {
    if (type == "dubTable") {
        return "Two Person Table";
    } else if (type == "quadTable") {
        return "Four Person Table";
    } else {
        return "Five Person Table";
    }
}

function timeValidation(startTime, endTime) {
    if (startTime == endTime || startTime > endTime) {
        if ((startTime < '09:00' || startTime > '23:00')) {
            return false;
        }
    } else {
        return true;
    }
}


function getStartTime() {
    let start =  document.getElementById("start").value;
    
    let s = start.split(':');
    console.log(s[0] + "$" + s[1])
    return s[0] + "$" + s[1];
}

function getEndTime() {
    let end = document.getElementById("end").value;
    let s = end.split(':');
    console.log(s[0] + "$" + s[1])
    return s[0] + "$" + s[1];
}

function displayData(parseData) {
    let para = document.getElementById("fetchedData");
    for (let i = 0; i < parseData.length; i++) {
        if (para != null) {
            para.innerHTML += typeName(parseData[i].type) + " is booked on " + parseData[i].date + " from :" + parseData[i].start + " to " + parseData[i].end + "<br>";
        }
    }
}

//data storage 
function storeData(appointments) {
    console.log("store data called");
    let serializedData = JSON.stringify(appointments);
    localStorage.setItem("schedule", serializedData);
    console.log(serializedData);
}

function fetchData() {
    console.log("fetch data called");
    let parseData = JSON.parse(localStorage.getItem("schedule"));
    if(parseData != null) {
        displayData(parseData);
    }
    
    return parseData;
}



