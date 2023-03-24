const client = require('../model/connection')


async function getData(req, res) {
    const pages = req.query.p || 0;
    const dataPerPage = 10;
    const data = await client
        .db('Pagination').
        collection('data').
        find().
        skip(pages * dataPerPage).
        limit(dataPerPage).toArray()
    res.json(data);
}

async function createData(req, res) {
    for (let i = 0; i < 50; i++) {
        const str = "data";
        await client.db('Pagination').collection('data').insertOne({
            name: str + i
        })
    }
    res.send("DONE");
}

module.exports = { getData, createData }