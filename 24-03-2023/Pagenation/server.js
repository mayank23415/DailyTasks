const express = require('express')
const app = express()
const router = require('./routes/apiPagination')

app.use(express.json())
app.use("/", router)

app.listen(3000, ()=> {
    console.log("Listening on port 3000")
})