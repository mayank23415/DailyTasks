const express = require('express');
const { FindCursor } = require('mongodb');
const app = express();

app.set("view engine", "ejs");
//var bookTable = require('./routes/bookTable');
//var deleteTable = require('./routes/deleteTable');
const tableBooking = require('./routes/tableBooking');
//var displayTable = require('./routes/displayTable');
app.use(express.static('public'));



app.use('/', tableBooking);
app.use('/', tableBooking);

app.listen(3000, console.log("Success"));