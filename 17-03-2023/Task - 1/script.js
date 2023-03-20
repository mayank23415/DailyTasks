const { MongoClient } = require('mongodb');
const uri = "mongodb://127.0.0.1:27017/Students";
const client = new MongoClient(uri);



async function main() {
    

    try {
        await client.connect();
        const result = await client.db('Students').collection('results');
        //await insertData(result);
        //await getData(result);
        //await deleteData(result);
        await updateData(result);
        await console.log("Connection Successful");
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function insertData(result) {
    await result.insertOne({
        rollNo : 4,
        name : "Vasu",
        age : 22,
        marks : 420,
    })
}
async function getData(result) {
    const db = await result.find().toArray();
    await console.log(db);
}

async function deleteData(result) {
    await result.drop({rollNo : 2});
    await console.log("Deleted");
    await getData(result);
}

async function updateData(result) {
    await result.updateOne({name : "Mayank"}, {$set:{age : 22}});
    await console.log(await getData(result));
}
main().catch(console.error);
