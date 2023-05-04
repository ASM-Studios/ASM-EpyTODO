const bcrypt = require('bcryptjs')

async function encryptString(str) {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(str, salt)
}

async function comparePasswords(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword)
}

module.exports = {
    encryptString,
    comparePasswords
}