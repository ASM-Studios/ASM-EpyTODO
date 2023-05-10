const express = require('express')
const dotenv = require('dotenv').config()

const userRouter = express.Router()
const { userInfoById } = require('./user.query')

userRouter.get('/', (req, res) => {
    const id = req.userId.id
    userInfoById(res, id)
})

module.exports = { userRouter }