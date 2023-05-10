const db = require('../../config/db')

exports.getAllTodo = (res) => {
    db.query('SELECT * FROM `todo`', function (error, result) {
        if (error)
            return res.status(500).json({ msg: "Internal server error" })
        res.status(200).json(result)
    })
}