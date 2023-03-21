const express = require('express');
const router = express.Router();

const bookTable = require('../controller/tableBooking');

router.get('/', bookTable.dashboard);
router.get('/', bookTable.bookTable);

module.exports = router;