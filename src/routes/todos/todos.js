const express = require('express')

const todoRouter = express.Router()
const { getAllTodo, getTodoById, createTodo, updateTodoById, deleteTodoById } = require("./todos.query")

todoRouter.get('/', (req, res) => {
    getAllTodo(res)
})

todoRouter.get('/:id', (req, res) => {
    getTodoById(res, req.params.id)
})

todoRouter.post('/', (req, res) => {
    const statusList = ["not started", "todo", "in progress", "done"]
    let title = req.body.title
    let description = req.body.description
    let due_time = req.body.due_time
    let user_id = req.body.user_id
    let status = req.body.status

    if (!title || !description || !due_time || !user_id || !status || !statusList.includes(status))
        return res.status(400).json({ msg: "Bad parameter" })
    createTodo(res, title, description, due_time, user_id, status)
})

todoRouter.put('/:id', (req, res) => {
    const statusList = ["not started", "todo", "in progress", "done"]
    let title = req.body.title
    let description = req.body.description
    let due_time = req.body.due_time
    let user_id = req.body.user_id
    let status = req.body.status

    if (!title || !description || !due_time || !user_id || !status || !statusList.includes(status))
        return res.status(400).json({ msg: "Bad parameter" })
    updateTodoById(res, req.params.id, title, description, due_time, user_id, status)
})

todoRouter.delete('/:id', (req, res) => {
    deleteTodoById(res, req.params.id)
})

module.exports = { todoRouter }