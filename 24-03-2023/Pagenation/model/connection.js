const {MongoClient} = require('mongodb')
const url = "mongodb://127.0.0.1:27017"
const client = new MongoClient(url);

async function connection() {
    try{
        await client.connect()
        await client.db('Pagination').collection('data')
        console.log('CONNECTED')
    }catch(e) {
        console.log(e)
    }
}

connection();
module.exports = client