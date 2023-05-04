const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const port = process.env.PORT
const bcrypt = require('bcryptjs')
const { text } = require("express")

const crypto = require('./crypto/crypto')

const db = require('./config/db');

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})