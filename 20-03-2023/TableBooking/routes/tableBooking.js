const express = require('express');
const router = express.Router();

const bookTable = require('../controller/tableBooking');

router.get('/', bookTable.dashboard);
router.post('/setData/:data?', bookTable.bookTable); /*To insert in databse */
router.post('/deleteTable/:data?', bookTable.deleteTable); /*To delete in databse */
router.use('/', bookTable.getTable); /*To get info from  databse */




module.exports = router;