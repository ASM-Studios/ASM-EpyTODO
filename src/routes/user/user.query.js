const db = require('../../config/db')
const bcrypt = require('bcryptjs')

exports.test = (name) => {
    console.log(`Your name is ${name}`)
}

exports.userInfoById = (res, userId) => {
    db.query('SELECT * FROM `user` WHERE `id` = ?', [userId], function (error, result) {
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

exports.userInfoByIdOrEmail = (res, idOrEmail) => {
    db.query('SELECT * FROM `user` WHERE `id` = ? OR `email` = ?', [idOrEmail, idOrEmail], function (error, result) {
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

exports.userTodoById = (res, userId) => {
    db.query('SELECT todo.* FROM todo INNER JOIN user ON todo.user_id = user.id WHERE user.id = ?', [userId], function (error, result) {
        if (error)
            return res.status(500).json({ msg: "Internal server error" })
        return res.status(200).json(result)
    })
}