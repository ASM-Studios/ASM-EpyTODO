const express = require('express')

const todoRouter = express.Router()
const { getAllTodo } = require("./todos.query")

todoRouter.get('/', (req, res) => {
    getAllTodo(res)
})

module.exports = { todoRouter }