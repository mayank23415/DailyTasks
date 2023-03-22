const {MongoClient} = require('mongodb');
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function connection() {
    try{
        await client.connect();
        await client.db('Restaurant').collection('schedules');
        console.log("Successfully connected");
    }catch (e) {
        await console.log(e);
    }
}

connection();
module.exports = client;