const bcrypt = require('bcrypt')
const {saltRounds } = require('../config')

const getSalt = async () => {
    return await bcrypt.genSaltSync(+saltRounds)
    
    }

const hasherPassword = async (password) => {
    const salt = await getSalt();
    //console.log(salt);
    return bcrypt.hashSync(password, salt)
}

const comparePassword = async (password, encryptedPassword) => {
    return await bcrypt.compareSync(password, encryptedPassword)
}


module.exports = { hasherPassword, comparePassword }