const {MongoClient} = require('mongodb');
const url = "mongodb+srv://mayankawasthi2021:mayankroot@student.zkqchm0.mongodb.net/test";
const client = new MongoClient(url);

async function connection() {
    try{
        await client.connect();
        console.log("MongoDB Connected");
    }catch(e) {
        console.log(Error);
    }
}

connection();
module.exports = client;