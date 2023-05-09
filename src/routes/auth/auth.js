const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()
const mailRegex = require('../../config/regex')

const { register, login } = require('./auth.query')

router.post('/register', (req, res) => {
    let email = req.body.email
    let password = req.body.password
    let name = req.body.name
    let firstname = req.body.firstname

    if (!email || !password || !name || !firstname || !mailRegex.test(email))
        return res.status(400).json({ msg: 'Bad parameter' })
    register(res, email, password, name, firstname)
});

router.post('/login', (req, res) => {
    let email = req.body.email
    let password = req.body.password
    if (!email || !password)
        return res.status(400).json({ msg: "Invalid Credentials" })
    login(res, email, password)
})

module.exports = router;