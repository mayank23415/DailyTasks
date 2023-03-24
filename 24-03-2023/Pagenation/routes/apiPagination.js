const express = require('express')
const router = express.Router()
const api = require('../controller/apiPagination')

router.get('/', (req, res) =>{
    res.send("Hello");
});

router.get('/getData', api.getData);
router.get('/createData', api.createData)
module.exports = router