const jwt = require('jsonwebtoken')
const db = require('../../config/db')
const crypt = require('bcryptjs')
require('dotenv').config()

exports.register = (res, email, password, name, firstname) => {
    crypt.hash(password, 12).then(hash => {
        db.query('INSERT INTO `user` (email, password, name, firstname) VALUES (?, ?, ?, ?)',
            [ email, hash, name, firstname ],
            function (err, result) {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY')
                    return res.status(400).json({ msg: "Account already exists" })
                return res.status(500).json({ msg: "Internal server error" })
            }
            const tkn = jwt.sign(
                { id: res.insertId }, process.env.TOKEN_SECRET, { expiresIn: '1d' }
            )
            res.status(200).json({ token: tkn })
        })
    }).catch(() => res.status(500).json({ msg: "Internal server error" }))
}

exports.login = (res, email, password) => {
    db.query('SELECT * FROM `user` WHERE `email` = ?',
        [email],
        function (err, results) {
        if (err || results.length !== 1) {
            return res.status(500).json({ msg: "Internal server error" })
        }
        crypt.compare(password, results[0].password, function (compareError, compareResult) {
            if (compareError) {
                return res.status(400).json({ msg: "Invalid Credentials" })
            } else if (compareResult) {
                const tkn = jwt.sign(
                    { id: results[0].id}, process.env.TOKEN_SECRET, { expiresIn: '1d' }
                )
                return res.status(200).json({ token: tkn })
            } else {
                return res.status(400).json({ msg: "Invalid Credentials " })
            }
        })
    })
}