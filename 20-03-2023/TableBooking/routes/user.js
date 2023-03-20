
const express = require('express');
const router = express.Router();
const helloWorld = require('../controller/user');
router.get("/", helloWorld);

module.exports = router;