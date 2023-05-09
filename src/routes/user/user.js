const express = require('express')
const dotenv = require('dotenv').config()

const userRouter = express.Router()

userRouter.get('/', (req, res) => {
    return res.status(200).json({ msg: "Show user info"})
})

module.exports = { userRouter }