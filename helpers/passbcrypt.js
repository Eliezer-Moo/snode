const bcrypt = require('bcrypt')
const {saltRounds } = require('../config')

const getSalt = async () => {
    return await bcrypt.genSaltSync(+saltRounds)
    
    }

const hasherPassword = async (password) => {
    const salt = await getSalt();
    console.log(salt);
    return bcrypt.hashSync(password, salt)
}


module.exports = { hasherPassword }