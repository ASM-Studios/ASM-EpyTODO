const express = require('express');
const {
    test
} = require('./user.query')
const userRoute = express.Router()

userRoute.get('/login', (req, res) => {
    test('edouard')
})

module.exports = { userRoute }