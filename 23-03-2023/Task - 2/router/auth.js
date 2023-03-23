const express = require('express');
const router = express.Router();
const client = require('../model/connection');
const user = require('../model/schema');
const bcrypt = require('bcrypt');

router.post('/signUp', (req, res) => {
    const {username, password} = req.body;
     
})