const mysql = require('mysql2')
const db = require('../../config/db')

exports.register = (res, email, password, name, firstname) => {
    const entry = { email, password, name, firstname }
    db.query('INSERT INTO `user` SET ?', entry, function (err, result) {
        if (err) {
            console.error(err)
            return res.status(500).send(`Error while adding values to database: ${err.message}`)
        }
        return res.status(200).send('Entry successfully added')
    })
}

exports.test = (name) => {
    console.log(`name: ` + name)
}