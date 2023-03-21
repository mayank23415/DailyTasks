const {MongoClient} = require('mongodb');
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);
let db;

async function connection() {
    try{
        await client.connect();
        db = client.db('Restaurant').collection('schedule');
        console.log("Successfully connected");
    }catch (e) {
        await console.log(e);
    }
}

connection();
module.exports = db;