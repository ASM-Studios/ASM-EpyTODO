const express = require('express')
const dotenv = require('dotenv').config()

const userRouter = express.Router()
const usersRouter = express.Router()
const { userInfoById, userInfoByIdOrEmail, userTodoById } = require('./user.query')

userRouter.get('/', (req, res) => {
    userInfoById(res, req.userId.id)
})

userRouter.get('/todos', (req, res) => {
    userTodoById(res, req.userId.id)
})

usersRouter.get('/:idOrEmail', (req, res) => {
    userInfoByIdOrEmail(res, req.params.idOrEmail)
})

module.exports = { userRouter, usersRouter }