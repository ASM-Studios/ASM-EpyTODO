const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT
const db = require('./config/db')

const auth = require('./middleware/auth')
const { authRouter } = require('./routes/auth/auth')
const { userRouter, usersRouter } = require('./routes/user/user')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/get', (req, res) => {
    db.query('SELECT * FROM `user`', function (err, result) {
        res.send(result)
    })
})

app.use('/', authRouter)
app.use('/user', auth, userRouter)
app.use('/users', auth, usersRouter)

app.use("*", (req, res) => {
    res.status(404).json({msg: 'Not Found'})
});

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
})