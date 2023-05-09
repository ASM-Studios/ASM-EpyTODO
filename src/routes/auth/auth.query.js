const mysql = require('mysql2')
const jwt = require('jsonwebtoken')
const db = require('../../config/db')
const crypt = require('bcryptjs')
require('dotenv').config()

exports.register = (res, email, password, name, firstname) => {
    crypt.hash(password, 12).then(hash => {
        const userPayload = { email, password, name, firstname }
        db.query('INSERT INTO `user` SET ?', userPayload, function (err, result) {
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
    }).catch(() => res.status(500).json({ msg: "Internal server error"}))
}

exports.login = (res, email, password) => {
    return res.status(200).json({msg: "Ok"})
}