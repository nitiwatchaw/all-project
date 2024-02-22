const express = require('express')
const router = express.Router()
const path = require('path');
const { read, list, create, put, remove } = require('../controllers/products')


//middleware
const { auth } = require('../middleware/auth')

//เมื่อมีการใช้งานจะทำ function auth ก่อน(middleware)
router.get('/products', auth, list);

router.get('/products/:id', auth, read);


router.post('/products', auth, create);

router.put('/products/:id', auth, put);
router.delete('/products/:id', remove);

module.exports = router