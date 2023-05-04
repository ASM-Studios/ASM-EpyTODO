const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    console.log(req.headers.authorization)
}

module.exports = { auth }