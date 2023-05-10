const db = require('../../config/db')
const bcrypt = require('bcryptjs')

exports.test = (name) => {
    console.log(`Your name is ${name}`)
}

exports.userInfoById = (res, id) => {
    db.query('SELECT * FROM `user` WHERE `id` = ?', id, function (error, result) {
        if (error || result.length !== 1)
            return res.status(500).json({ msg: "Internal server error" })
        return res.status(200).json({
            id : result[0].id,
            email : result[0].email,
            password : result[0].password,
            created_at : result[0].created_at,
            firstname : result[0].firstname,
            name : result[0].name
        })
    })
}