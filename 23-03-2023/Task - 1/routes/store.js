const express = require('express');
const router = express.Router();
const path = require('path');
const client = require('../model/getConnection');
const schema = require('../model/schema');


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/pages/index.html"))
});

router.post('/setData', (req, res) => {
    const user = new schema({
        name : 'Mayank Awasthi'
    })
    let flag;
    async function setData() {
        flag = await client.db('Student').collection('results').insertOne(user);
    }
    setData();
})


module.exports = router;