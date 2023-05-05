const express = require('express')
const dotenv = require('dotenv').config()
const { text } = require("express")
const app = express()
const port = process.env.PORT
const db = require('./config/db')

const auth = require('./middleware/auth')
const userRoute = require('./routes/user/user')
const authRoute = require('./routes/auth/auth')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const jwt = require('jsonwebtoken')

app.get('/jwt', (req, res) => {
    const user = {
        id:'1',
        email: 'johndoe@example.com'
    }
    jwt.sign(user, process.env.TOKEN_SECRET, (err, token) => {
        res.json({token})
    })
})

app.get('/protected', auth, (req, res) => {
    res.status(200).json({msg: 'connected'})
})

app.get('/get', (req, res) => {
    db.query('SELECT * FROM `user`', function (err, result) {
        res.send(result)
    })
})

app.use('/', authRoute)

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
})
