const express = require('express')
const dotenv = require('dotenv').config()
const { text } = require("express")

const app = express()
const port = process.env.PORT


const bcrypt = require('bcryptjs')

const db = require('./config/db')

const auth = require('./middleware/auth')

const { userRoute } = require('./routes/user/user')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const password = 'pass123';

// Encryption of the string password
bcrypt.genSalt(10, function (err, Salt) {

    // The bcrypt is used for encrypting password.
    bcrypt.hash(password, Salt, function (err, hash) {

        if (err) {
            return console.log('Cannot encrypt');
        }

        const hashedPassword = hash;
        console.log(hash);

        bcrypt.compare(password, hashedPassword,
            async function (err, isMatch) {

                // Comparing the original password to
                // encrypted password
                if (isMatch) {
                    console.log('Encrypted password is: ', password);
                    console.log('Decrypted password is: ', hashedPassword);
                }

                if (!isMatch) {

                    // If password doesn't match the following
                    // message will be sent
                    console.log(hashedPassword + ' is not encryption of '
                        + password);
                }
            })
    })
})

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`)
})
