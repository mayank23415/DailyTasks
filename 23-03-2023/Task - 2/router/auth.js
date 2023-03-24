const express = require('express');
const router = express.Router();
const auth = require('../controller/auth')



router.get('/', (req, res) => {
    res.send("This is root");
})
router.post('/signUp', auth.signUp);
router.post('/login', auth.login);
router.get('/loggedIn', auth.authorization, auth.loggedIn);


module.exports = router;