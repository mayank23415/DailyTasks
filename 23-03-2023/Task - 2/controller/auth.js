const schema = require('../model/schema');
const client = require('../model/connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function signUp(req, res) {
    const { name, password } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        const user = new schema({
            name: name,
            password: hash
        })
        client.db('Auth').collection('User').insertOne(user);
    })
        .then(
            res.send("User Registered")
        )
        .catch((err) => {
            if (err) {
                res.status(400).json({ error: err });
            }
        })
}


async function login(req, res) {
    //Authentication Start here -------------------------
    const { name, password} = req.body;
    const user = await client.db('Auth').collection('User').findOne({
        name: name,
    });
    console.log(user);
    if (!user) res.status(400).json({ error: "User Does Not Exist" });


    const dbPassword = user.password;
    bcrypt.compare(password, dbPassword).then((match) => {

        if (!match) {
            res.json({error : "Wrong Username or Password"});
        } else {
            //JWT Token generation ---------------------
            const accesToken = jwt.sign(name, process.env.ACCESS_TOKEN_SECRET);

            res.json({ accesToken: accesToken, result: "LOGGED IN" });
        }
    })
    //Authentication Ends here ---------------------------------
}

function loggedIn(req,  res) {
    res.json({user : req.user, token : req.headers['authorization']});
}

function authorization(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(403);
        req.user = user;
        next()
    })
}

module.exports = { signUp, login, loggedIn, authorization};