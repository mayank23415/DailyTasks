const express = require('express');
const router = express.Router();

const dashboard = require('../controller/dashboard');

router.get('/', dashboard.dashboard);

module.exports = router;