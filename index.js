require('dotenv').config()
require('./server')

const { 
    environment: {validateEnv}
} = require('./utils')

const reqEnv = ['PORT', 'DB_CONNECTION']

validateEnv(reqEnv)