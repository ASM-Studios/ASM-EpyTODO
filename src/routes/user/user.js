const express = require('express')
const dotenv = require('dotenv').config()

const userRouter = express.Router()
const usersRouter = express.Router()
const { userInfoById,
    userInfoByIdOrEmail,
    userTodoById,
    updateUserById,
    deleteUserById } = require('./user.query')
const {mailRegex} = require("../../config/regex");

userRouter.get('/', (req, res) => {
    userInfoById(res, req.userId.id)
})

userRouter.get('/todos', (req, res) => {
    userTodoById(res, req.userId.id)
})

usersRouter.get('/:idOrEmail', (req, res) => {
    userInfoByIdOrEmail(res, req.params.idOrEmail)
})

usersRouter.put('/:id', (req, res) => {
    let email = req.body.email
    let password = req.body.password
    let name = req.body.name
    let firstname = req.body.firstname

    if (!email || !password || !name || !firstname || !mailRegex.test(email))
        return res.status(400).json({ msg: "Bad parameter" })
    updateUserById(res, req.params.id, email, password, name, firstname)
})

usersRouter.delete('/:id', (req, res) => {
    deleteUserById(res, req.params.id)
})

module.exports = { userRouter, usersRouter }