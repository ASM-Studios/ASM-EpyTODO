const db = require('../../config/db')

exports.getAllTodo = (res) => {
    db.query('SELECT * FROM `todo`',
        function (error, result) {
        if (error)
            return res.status(500).json({ msg: "Internal server error" })
        res.status(200).json(result)
    })
}

exports.getTodoById = (res, todoId) => {
    db.query('SELECT * FROM `todo` where `id` = ?',
        [todoId],
        function (error, result) {
        if (error || result.length > 1)
            return res.status(500).json({ msg: "Internal server error" })
        if (result.length === 0)
            return res.status(404).json({ msg: `Todo with id ${todoId} doesn't exist` })
        res.status(200).json({
            id: result[0].id,
            title: result[0].title,
            description: result[0].description,
            created_at: result[0].created_at,
            due_time: result[0].due_time,
            user_id: result[0].user_id,
            status: result[0].status })
    })
}

exports.createTodo = (res, title, description, due_time, user_id, status) => {
    db.query(
        'INSERT INTO `todo` (`title`, `description`, `due_time`, `user_id`, `status`) VALUES (?, ?, ?, ?, ?)',
        [title, description, due_time, user_id, status],
        (error, result) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ msg: "Internal server error" })
            }
            db.query('SELECT * FROM `todo` where `id` = ?',
                [result.insertId],
                function (error, result) {
                    if (error || result.length > 1)
                        return res.status(500).json({ msg: "Internal server error" })
                    if (result.length === 0)
                        return res.status(404).json({ msg: `Todo with id ${result.insertId} doesn't exist` })
                    res.status(200).json({
                        id: result[0].id,
                        title: result[0].title,
                        description: result[0].description,
                        created_at: result[0].created_at,
                        due_time: result[0].due_time,
                        user_id: result[0].user_id,
                        status: result[0].status })
            })
    })
}

exports.updateTodoById = (res, id, title, description, due_time, user_id, status) => {
    db.query('UPDATE todo SET title = ?, description = ?, due_time = ?, user_id = ?, status = ? WHERE id = ?',
        [title, description, due_time, user_id, status, id],
        function (error) {
            if (error)
                return res.status(500).json({ msg: "Internal server error" })
        })
    db.query('SELECT * FROM `todo` where `id` = ?',
        [id],
        function (error, result) {
            if (error || result.length > 1)
                return res.status(500).json({ msg: "Internal server error" })
            if (result.length === 0)
                return res.status(404).json({ msg: `Todo with id ${id} doesn't exist` })
            res.status(200).json({
                id: result[0].id,
                title: result[0].title,
                description: result[0].description,
                created_at: result[0].created_at,
                due_time: result[0].due_time,
                user_id: result[0].user_id,
                status: result[0].status })
    })
}

exports.deleteTodoById = (res, todoId) => {
    db.query('DELETE FROM `todo` WHERE `id` = ?',
        [todoId],
        function (error, result) {
            if (error)
                return res.status(500).json({ msg: "Internal server error" })
            if (result.affectedRows > 0) {
                return res.status(200).json({ msg: `Successfully deleted record number: ${todoId}` });
            } else {
                return res.status(404).json({ msg: `User with id '${todoId}' not found` });
            }
    })
}