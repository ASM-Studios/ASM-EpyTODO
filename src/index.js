const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const port = process.env.PORT
const postman = require('postman')
const { text } = require("express")

const db = require('./config/db');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})