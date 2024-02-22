const express = require('express')
const router = express.Router()
const path = require('path');
const { register, login } = require('../controllers/auths');


router.post('/register', register);
router.post('/login', login)


module.exports = router