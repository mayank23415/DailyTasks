const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('public'));
const router = require('./routes/store');

app.use("/", router);


app.listen(3000, ()=>{
    console.log('Connected to port')
})