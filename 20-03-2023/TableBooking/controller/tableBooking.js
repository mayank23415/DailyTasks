const db = require('../model/mongoClient');
const obj = {
    date : "String",
    start : "String",
    end : "String",
    tableType : "String",
}


const bookTable = (req, res) => {
    console.log("hello");
}

const deleteTable = (req, res) => {
    res.send("This is where we will delete the table");
}

const dashboard = (req, res) => {
    res.render('index');
};  
module.exports = {bookTable, deleteTable, dashboard};