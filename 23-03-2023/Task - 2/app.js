const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());


const router = require('../Task - 2/router/auth');

app.use('/', router);

app.listen(3000, ()=> {
    console.log('Connected to port 3000')
})