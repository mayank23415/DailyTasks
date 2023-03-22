let appointments = [];
if(fetchData() != null) {
    appointments = fetchData();
}
console.log(appointments);

//table booking
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
        //console.log(table);
        //setData(table);
        getData();
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
        table.start = start;
        table.end = end;
        if (appointments.length == 0) {
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


//---------------------------------------------------------------- Delete Schedule from Database
async function Delete() {
    let date = document.getElementById("date").value;
    let start = getStartTime();
    let end = getEndTime();
    let tableType = document.getElementById("tableType").value;
    let str = date + ":" + start + ":" + end + ":" + tableType;

    const url = `http://localhost:3000/deleteTable/`;
    const a = await ((fetch(url + JSON.stringify(str), {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        }
    })));
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
    let start = document.getElementById("start").value;
    let s = start.split(':');
    //console.log(s[0] + "$" + s[1])
    return s[0] + "$" + s[1];
}

function getEndTime() {
    let end = document.getElementById("end").value;
    let s = end.split(':');
    //console.log(s[0] + "$" + s[1])
    return s[0] + "$" + s[1];
}

function displayData(parseData) {
    let para = document.getElementById("fetchedData");
    if (parseData != null) {
        for (let i = 0; i < parseData.length; i++) {
            if (para != null) {
                const startTime = parseData[i].start.split("$");
                const endTime = parseData[i].end.split("$");
                para.innerHTML += typeName(parseData[i].type) + " is booked on " + parseData[i].date + " from :" + startTime[0] + ":" + startTime[1] + " to " + endTime[0] + ":" + endTime[1] + "<br>";
            }
        }
    }
}

function setDate() {
    let date = document.getElementById("date");
    let currentDate = new Date();
    let dateString = currentDate.toISOString();
    date.setAttribute("min", dateString.substr(0, 10));
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
    if (parseData != null) {
        displayData(parseData);
    }
    const data = getData();
    console.log(data.value);
    return parseData;
}


// -------------------------------------------------------------- Storing Data on Database
async function setData(table) {
    const url = `http://localhost:3000/setData/`;
    const a = await (await (fetch(url + JSON.stringify(table), {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        }
    })));
    console.log(a);
}

// -------------------------------------------------------------- Getting Data from Database
async function getData() {
    const url = `http://localhost:3000/`;
    const a = await (await fetch(url, {
        method: 'GET'
    }));
    return a;
}