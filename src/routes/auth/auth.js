const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

const { register, test } = require('./auth.query')

router.post('/register', (res, req) => {
    test('andre')
})

module.exports = router;