const express = require('express');
const app = express();

const hello = require('./routes/user');
app.use('/hello', hello);

app.listen(3000, console.log("Process Started"));