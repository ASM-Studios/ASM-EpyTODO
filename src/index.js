const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT
const db = require('./config/db')

const auth = require('./middleware/auth')
const { authRouter } = require('./routes/auth/auth')
const { userRouter, usersRouter } = require('./routes/user/user')
const { todoRouter } = require('./routes/todos/todos')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//Use to interact with the front-end
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//Route for test purpose only, remove before release
app.get('/get', (req, res) => {
    db.query('SELECT * FROM `user`', function (err, result) {
        res.send(result)
    })
})

app.use('/', authRouter)
app.use('/user', auth, userRouter)
app.use('/users', auth, usersRouter)
app.use('/todos', auth, todoRouter)

app.use("*", (req, res) => {
    res.status(404).json({msg: 'Not Found'})
});

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
})