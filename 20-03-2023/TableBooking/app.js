const express = require('express');
const app = express();


//var bookTable = require('./routes/bookTable');
//var deleteTable = require('./routes/deleteTable');
const dashboard = require('./routes/dashboard');
//var displayTable = require('./routes/displayTable');
app.use(express.static('public'));




app.use('/', dashboard);
//app.use('/', dashboard);
//app.use('/booktable', bookTable);
//app.use('/displaytable', displayTable);
//app.use('/deletetable', deleteTable);

app.listen(3000, console.log("Start Success"));