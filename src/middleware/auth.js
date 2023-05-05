const jwt = require('jsonwebtoken')
require('dotenv').config()

function auth(req, res, next) {
    try {
        const token = req.headers.authorization
        if (!token) {
            return res.status(401).json({msg: 'No token provided'})
        }
        jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.status(403).json({msg: 'Invalid token'})
            }
            req.user = user
            next()
        })
    } catch (error) {
        return res.status(500).json({msg: 'Internal server error'})
    }
}

module.exports = auth
