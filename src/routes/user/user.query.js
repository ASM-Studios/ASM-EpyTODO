const db = require('../../config/db')
const crypt = require('bcryptjs')
const jwt = require("jsonwebtoken");

exports.userInfoById = (res, userId) => {
    db.query('SELECT * FROM `user` WHERE `id` = ?',
        [userId],
        function (error, result) {
        if (error || result.length > 1)
            return res.status(500).json({ msg: "Internal server error" })
        if (result.length === 0)
            return res.status(404).json({ msg: "User doesn't exist" })
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
    db.query('SELECT * FROM `user` WHERE `id` = ? OR `email` = ?',
        [idOrEmail, idOrEmail],
        function (error, result) {
        if (error || result.length > 1)
            return res.status(500).json({ msg: "Internal server error" })
        if (result.length === 0)
            return res.status(404).json({ msg: `User '${idOrEmail}' doesn't exist` })
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
    db.query('SELECT todo.* FROM todo INNER JOIN user ON todo.user_id = user.id WHERE user.id = ?',
        [userId],
        function (error, result) {
        if (error)
            return res.status(500).json({ msg: "Internal server error" })
        return res.status(200).json(result)
    })
}

exports.updateUserById = (res, userID, email, password, name, firstname) => {

    crypt.hash(password, 12).then(hash => {
        db.query('UPDATE user SET email = ?, firstname = ?, name = ?, password = ? WHERE id = ?',
            [email, firstname, name, hash, userID],
            function (error, result) {
                if (error)
                    return res.status(500).json({ msg: "Internal server error" })
            })
    })

    db.query('SELECT * FROM `user` WHERE `id` = ?',
        [userID],
        function (getError, getResult) {
            if (getError || getResult.length > 1)
                return res.status(500).json({ msg: "Internal server error" })
            if (getResult.length === 0)
                return res.status(404).json({ msg: `User with id '${userID}' doesn't exist` })
            res.status(200).json({
                id : getResult[0].id,
                email : getResult[0].email,
                password : getResult[0].password,
                created_at : getResult[0].created_at,
                firstname : getResult[0].firstname,
                name : getResult[0].name
            })
        })

}

exports.deleteUserById = (res, userID) => {
    db.query('DELETE FROM `user` WHERE `id` = ?',
        [userID],
        function (error, result) {
        if (error)
            return res.status(500).json({ msg: "Internal server error" })
        if (result.affectedRows > 0) {
            return res.status(200).json({ msg: `Successfully deleted record number: ${userID}` });
        } else {
            return res.status(404).json({ msg: `User with id '${userID}' not found` });
        }
    })
}