const client = require('../model/mongoClient');
const path = require('path');
const obj = {
    date : "String",
    start : "String",
    end : "String",
    tableType : "String",
}


async function bookTable(req, res)  {
    const data = JSON.parse(req.params.data);
    console.log(data);
    await client.db('Restaurant').collection('schedules').insertOne(data);
}

async function deleteTable(req, res){
    const str = JSON.parse(req.params.data);
    console.log(str);
    const arr = str.split(":");
    console.log(arr);
    await client.db('Restaurant').collection('schedules').deleteOne({
        date : arr[0],
        start : arr[1],
        end : arr[2],
        type : arr[3]
    });
}

async function getTable(req, res) {
    const data = await client.db('Restaurant').collection('schedules').find().toArray();
    res.json(data);
}

const dashboard = (req, res) => {
    res.sendFile(path.join(__dirname, "../public/pages/index.html"));
};
  
module.exports = {bookTable, deleteTable, dashboard, getTable};