const express = require('express')
const dotenv = require('dotenv').config()
const { text } = require("express")
const app = express()
const port = process.env.PORT
const db = require('./config/db')

const auth = require('./middleware/auth')
const { userRoute } = require('./routes/user/user')

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

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
})
