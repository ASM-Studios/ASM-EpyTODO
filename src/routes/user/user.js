const express = require('express')
const dotenv = require('dotenv').config()

const userRouter = express.Router()
const { userInfoById, userTodoById } = require('./user.query')

userRouter.get('/', (req, res) => {
    userInfoById(res, req.userId.id)
})

userRouter.get('/todos', (req, res) => {
    userTodoById(res, req.userId.id)
})

module.exports = { userRouter }