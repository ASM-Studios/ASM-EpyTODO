const jwt = require('jsonwebtoken')
require('dotenv').config()

function auth(req, res, next) {
    try {
        let token = req.headers.authorization
        if (!token)
            return res.status(401).json({msg: "No token provided" })
        token = token.split(" ")[1]
        jwt.verify(token, process.env.TOKEN_SECRET, (err, id) => {
            if (err)
                return res.status(403).json({msg: "Invalid token" })
            req.userId = id
            next()
        })
    } catch (error) {
        return res.status(500).json({msg: "Internal server error" })
    }
}

module.exports = auth