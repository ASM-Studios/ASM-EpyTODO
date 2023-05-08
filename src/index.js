const express = require('express')
const dotenv = require('dotenv').config()
const { text } = require("express")
const app = express()
const port = process.env.PORT
const db = require('./config/db')

const auth = require('./middleware/auth')
const authRouter = require('./routes/auth/auth')

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

app.use("*", (req, res) => res.status(404).json({ msg: 'Not Found' }));

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
})