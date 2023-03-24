const express = require('express')
const router = express.Router()
const api = require('../controller/apiPagination')

router.get('/', (req, res) =>{
    res.send("Hello");
});

router.get('/getData', api.getData);
module.exports = router