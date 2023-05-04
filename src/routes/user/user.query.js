const db = require('../../config/db')
const bcrypt = require('bcryptjs')

exports.test = (name) => {
    console.log(`Your name is ${name}`)
}