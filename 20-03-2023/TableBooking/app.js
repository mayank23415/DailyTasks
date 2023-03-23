const express = require('express');
const app = express();



const cors = require('cors');
app.use(cors({ origin: '*' }));



app.use(express.json());
const tableBooking = require('./routes/tableBooking');
app.use(express.static('public'));



app.use('/', tableBooking);

app.listen(3000, console.log("Success"));