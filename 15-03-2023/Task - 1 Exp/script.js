let tables = new Map();
tables.set("twoPersons", new Map());
tables.set("fourPersons", new Map());
tables.set("eightPersons", new Map());
let twoPersonTable = tables.get("twoPersons");
twoPersonTable.set("tbl1", []);



function main() {

    let start = document.getElementById("start");
    let end = document.getElementById("end");
    const object = {
        start: start.value,
        end: end.value
    };

    let addBooking = twoPersonTable.get("table_1");
    addBooking.push(object);
    twoPersonTable.set("table_1", addBooking);
    tables.set("twoPersonTable", twoPersonTable);
    console.log(tables);
}
