const bycrypt = require('bcrypt')
const {saltRounds } = require('../config')

const getSalt = async () => {
    return await bycrypt.genSaltSync(+saltRounds)
    
    }

const hasherPassword = async (password) => {
    const salt = await getSalt()
    console.log(salt)
    return await bycrypt.hashSync(password, salt)
}

module.exports = { hasherPassword }